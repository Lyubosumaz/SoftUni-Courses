// TODO: Require Controllers...
const cubeController = require('../controllers/cubeControllers');

module.exports = (app) => {
    app.get('/about', cubeController.about);
    app.get('/not-found', cubeController.notFound);
    app.get('/details/:id', cubeController.details);
    app.get('/create', cubeController.getCreate);
    app.post('/create', cubeController.postCreate);
    app.get('/', cubeController.index);
};