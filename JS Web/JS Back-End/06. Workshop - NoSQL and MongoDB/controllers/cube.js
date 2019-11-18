const models = require('../models');

function dataChecker(data) {
    if (!data) {
        res.redirect('/not-found');
        return;
    }
}

async function index(req, res, next) {
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
    try {
        const cubes = await models.cubeModel.find(query);
        dataChecker(cubes);
        res.render('index.hbs', {
            cubes,
            search, from, to
        });
    } catch (err) {
        next(err);
    }
}

async function details(req, res, next) {
    const id = req.params.id;
    try {
        const cube = await models.cubeModel.findById(id).populate('accessories');
        dataChecker(cube);
        res.render('updatedDetailsPage.hbs', { cube });
    } catch (err) {
        next(err);
    }
}

async function notFound(req, res) {
    await res.render('404.hbs');
}

async function about(req, res) {
    await res.render('about.hbs');
}

async function postCreate(req, res, next) {
    const { name = null, imageUrl = null, description = null, difficultyLevel = null } = req.body;
    try {
        await models.cubeModel.create({ name, description, imageUrl, difficultyLevel });
        await res.redirect('/');
    } catch (err) {
        next(err);
    }
}

async function getCreate(req, res) {
    await res.render('create.hbs');
}

module.exports = {
    index,
    details,
    notFound,
    about,
    postCreate,
    getCreate,
}