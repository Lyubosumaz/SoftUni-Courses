const models = require('../models');

function index(req, res, next) {
    const title = 'Cubicle';
    const user = req.user;

    const { search, from, to } = req.query;
    let query = {};
    if (search) {
        query = { ...query, name: { $regex: search } };
    }
    if (to) {
        query = { ...query, difficultyLevel: { $lte: Number(to) } };
    }
    if (from) {
        query = { ...query, difficultyLevel: { ...query.difficultyLevel, $gte: Number(from) } };
    }
    models.cubeModel.find(query)
        .then(cubes => {
            res.render('index.hbs', { title, user, search, from, to, cubes });
        }).catch((err) => {
            next(err);
        });
}

function about(req, res) {
    const title = 'About Page';
    const user = req.user;
    res.render('about.hbs', { title, user })
}

function getCreate(req, res) {
    const title = 'Create Cube Page';
    const user = req.user;
    res.render('createCube.hbs', { title, user });
}

function postCreate(req, res, next) {
    const title = 'Create Cube Page';
    const { name = null, imageUrl = null, description = null, difficultyLevel = null } = req.body;
    const { user } = req;
    models.cubeModel.create({ name, description, imageUrl, difficultyLevel, creatorId: user._id })
        .then(() => {
            res.redirect('/');
        }).catch(err => {
            if (err.name === 'ValidationError') {
                res.render('createCube.hbs', {
                    title,
                    errors: err.errors
                });
                return;
            }
            next(err);
        });
}

function details(req, res, next) {
    const title = 'Details';
    const user = req.user;
    const id = req.params.id;
    models.cubeModel.findById(id).populate('accessories')
        .then((cube) => {
            res.render('details.hbs', { title, user, cube });
        }).catch(err => {
            next(err);
        });
}

function getEdit(req, res, next) {
    const title = 'Edit Cube Page';
    const user = req.user;
    const id = req.params.id;
    models.cubeModel.findById({ _id: id, creatorId: user._id })
        .then((cube) => {
            const options = [
                null,
                { title: '1 - Very Easy', selected: 1 === cube.difficultyLevel },
                { title: '2 - Easy', selected: 2 === cube.difficultyLevel },
                { title: '3 - Medium (Standard 3x3)', selected: 3 === cube.difficultyLevel },
                { title: '4 - Intermediate', selected: 4 === cube.difficultyLevel },
                { title: '5 - Expert', selected: 5 === cube.difficultyLevel },
                { title: '6 - Hardcore', selected: 6 === cube.difficultyLevel }
            ];
            res.render('editCube.hbs', { title, user, cube, options });
        }).catch(err => {
            next(err);
        });
}

function postEdit(req, res, next) {
    const id = req.params.id;
    const { name = null, imageUrl = null, description = null, difficultyLevel = null } = req.body;
    models.cubeModel.updateOne({ _id: id }, { name, description, imageUrl, difficultyLevel })
        .then(() => {
            res.redirect('/');
        }).catch(err => {
            next(err);
        });
}

function getDelete(req, res, next) {
    const title = 'Delete Cube Page';
    const user = req.user;
    const id = req.params.id;
    models.cubeModel.findById(id)
        .then((cube) => {
            res.render('deleteCube.hbs', { title, user, cube });
        }).catch(err => {
            next(err);
        });
}

function postDelete(req, res, next) {
    const user = req.user;
    const id = req.params.id;
    models.cubeModel.findByIdAndDelete({ _id: id, creatorId: user._id })
        .then(() => {
            res.redirect('/');
        }).catch(err => {
            next(err);
        });
}

module.exports = {
    index,
    about,
    getCreate,
    postCreate,
    details,
    getEdit,
    postEdit,
    getDelete,
    postDelete,
};