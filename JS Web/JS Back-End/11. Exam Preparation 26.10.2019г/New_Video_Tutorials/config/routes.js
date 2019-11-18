const controller = require('../controllers');
// const { auth } = require('../utils')

module.exports = (app) => {
    app.get('/create', controller.course.get.create);
    app.post('/create', controller.course.post.create);

    app.get('/details/:id', controller.course.get.details);
    app.get('/enroll/:id', controller.course.enroll);
    app.get('/edit/:id', controller.course.get.edit);
    app.post('/edit/:id', controller.course.post.edit);
    app.get('/delete/:id', controller.course.delete);
    app.post('/search', controller.course.search);

    app.get('/register', controller.user.get.register);
    app.post('/register', controller.user.post.register);
    app.get('/login', controller.user.get.login);
    app.post('/login', controller.user.post.login);
    app.post('/logout', controller.user.post.logout);


    app.get('/', controller.home.get.index);

    app.get('*', (req, res) => { res.status(404); res.send('404 Not Found'); res.end(); });
};