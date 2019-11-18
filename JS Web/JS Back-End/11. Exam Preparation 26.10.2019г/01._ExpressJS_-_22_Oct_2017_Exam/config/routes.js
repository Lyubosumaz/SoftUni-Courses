const controllers = require('../controllers');
// const accessoryController = require('../controllers/accessory');
// const authController = require('../controllers/auth');
// const { auth } = require('../utils')

module.exports = (app) => {
    // app.get('/register');
    // app.post('/register', authController.registerPost);
    // app.get('/login', authController.loginGet);
    // app.post('/login', authController.loginPost);

    // app.get('/logout', auth(), authController.logout);
    // app.get('/edit/:id', auth(), cubeController.getEdit);
    // app.post('/edit/:id', auth(), cubeController.postEdit);
    // app.get('/delete/:id', auth(), cubeController.getDelete);
    // app.post('/delete/:id', auth(), cubeController.postDelete);

    // app.get('/create/accessory', auth(), accessoryController.createGet);
    // app.post('/create/accessory', accessoryController.createPost);
    // app.get('/attach/accessory/:id', auth(), accessoryController.attachGet);
    // app.post('/attach/accessory/:id', accessoryController.attachPost);

    // app.get('/about', auth(), cubeController.about);
    // app.get('/create', auth(), cubeController.getCreate);
    // app.post('/create', auth(), cubeController.postCreate);
    // app.get('/details/:id', auth(), cubeController.details);
    app.get('/', controllers.main.getHome);
    // app.get('*', (req, res) => { res.render('404.hbs') });
};