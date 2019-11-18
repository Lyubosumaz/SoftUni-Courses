const cubeModel = require('../models/cube');

function dataChecker(data) {
    if (!data) {
        res.redirect('/not-found');
        return;
    }
}

async function index(req, res, next) {
    // const { search, from, to } = req.query;
    // const findFn = (item) => {
    //     let result = true;
    //     if (search) {
    //         result = item.name.toLowerCase().includes(search.toLowerCase());
    //     }
    //     if (result && from) {
    //         result = Number(item.difficultyLevel) >= Number(from);
    //     }
    //     if (result && to) {
    //         result = Number(item.difficultyLevel) <= Number(to);
    //     }
    //     return result;
    // }

    try {
        const cubes = await cubeModel.find();
        dataChecker(cubes);
        res.render('index.hbs', {
            cubes,
            // search, from, to 
        });
    } catch (err) {
        next(err);
    }

    // cubeModel.find(findFn).then(cubes => {
    //     dataChecker(cubes);
    //     res.render('index.hbs', { cubes, search, from, to });
    // }).catch(next);
}

async function details(req, res, next) {
    const id = req.params.id;
    try {
        const cube = await cubeModel.getOne(id);
        dataChecker(cube);
        res.render('details.hbs', { cube });
    } catch (err) {
        next(err);
    }
    // cubeModel.getOne(id).then(cube => {
    //     dataChecker(cube);
    //     res.render('details.hbs', { cube });
    // }).catch(next);
}

async function notFound(req, res) {
    await res.render('404.hbs');
}

async function about(req, res) {
    await res.render('about.hbs');
}

async function postCreate(req, res, next) {
    const { name = null, imageUrl = null, description = null, difficultyLevel = null } = req.body;
    // const newCube = cubeModel.create(name, description, imageUrl, difficultyLevel);
    try {
        await cubeModel.create({name, description, imageUrl, difficultyLevel });
        await res.redirect('/');
    } catch (err) {
        next(err);
    }
    // cubeModel.insert(newCube).then(insertedCube => {
    //     // console.log(insertedCube);
    //     res.redirect('/');
    // })
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