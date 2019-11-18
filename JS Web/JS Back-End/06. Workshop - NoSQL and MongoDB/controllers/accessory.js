const models = require('../models');

function createPost(req, res, next) {
    const { name = null, imageUrl = null, description = null } = req.body;
    models.accessoryModel.create({ name, description, imageUrl })
        .then(() => {
            res.redirect('/');
        }).catch(next);
}

function createGet(req, res, nest) {
    res.render('createAccessory.hbs');
}

function attachPost(req, res, next) {
    const { id } = req.params;
    const { accessory: accessoryId } = req.body;
    Promise.all([
        models.cubeModel.update({ _id: id }, { $push: { accessories: accessoryId } }),
        models.accessoryModel.update({ _id: accessoryId }, { $push: { cubes: id } })
    ]).then(() => {
        res.redirect('/');
    }).catch(next);
}

function attachGet(req, res, next) {
    const { id: cubeId } = req.params;
    models.cubeModel.findById(cubeId).then(
        cube => Promise.all([cube, models.accessoryModel.find({ cubes: { $nin: cubeId } })])
    ).then(([cube, filterAccessories]) => {
        res.render('attachAccessory.hbs', {
            cube,
            accessories: filterAccessories.length > 0 ? filterAccessories : null
        });
    }).catch(next);
}

module.exports = {
    createGet,
    createPost,
    attachGet,
    attachPost,
}