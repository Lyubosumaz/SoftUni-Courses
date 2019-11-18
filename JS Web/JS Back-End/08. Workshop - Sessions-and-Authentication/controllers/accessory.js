const models = require('../models');

function createGet(req, res) {
    const title = 'Create Accessory';
    const user = req.user;
    res.render('createAccessory.hbs', { title, user });
}

function createPost(req, res, next) {
    const title = 'Create Accessory';
    const { name = null, imageUrl = null, description = null } = req.body;
    models.accessoryModel.create({ name, description, imageUrl })
        .then(() => {
            res.redirect('/');
        }).catch(err => {
            if (err.name === 'ValidationError') {
                res.render('createAccessory.hbs', {
                    title,
                    errors: err.errors
                });
                return;
            }
            next(err);
        });
}

function attachGet(req, res, next) {
    const { id: cubeId } = req.params;
    models.cubeModel.findById(cubeId).then(
        cube => Promise.all([cube, models.accessoryModel.find({ cubes: { $nin: cubeId } })])
    ).then(([cube, filterAccessories]) => {
        const title = 'Attach Accessory';
        const user = req.user;
        res.render('attachAccessory.hbs', {
            title,
            user,
            cube,
            accessories: filterAccessories.length > 0 ? filterAccessories : null
        });
    }).catch(next);
}

function attachPost(req, res, next) {
    const { id } = req.params;
    const { accessory: accessoryId } = req.body;
    Promise.all([
        models.cubeModel.updateOne({ _id: id }, { $push: { accessories: accessoryId } }),
        models.accessoryModel.updateOne({ _id: accessoryId }, { $push: { cubes: id } })
    ]).then(() => {
        res.redirect('/');
    }).catch(next);
}

module.exports = {
    createGet,
    createPost,
    attachGet,
    attachPost,
};