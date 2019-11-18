const controllers = require('../controllers');
const restrictedPages = require('./auth');

module.exports = app => {
    app.get('/', controllers.home.index);
    app.get('/register', controllers.user.registerGet);
    app.post('/register', controllers.user.registerPost);
    app.get('/login', controllers.user.loginGet);
    app.post('/login', controllers.user.loginPost);
    app.post('/logout', controllers.user.logout);

    app.get('/create/course', controllers.admin.get.createCourse);
    app.post('/create/course', controllers.admin.post.createCourse);
    app.get('/edit/course/:id', controllers.admin.get.editCourse);
    app.post('/edit/course/:id', controllers.admin.post.editCourse);
    app.get('/add/lecture/:id', controllers.admin.get.addLecture);
    app.post('/add/lecture/:id', controllers.admin.post.addLecture);

    app.get('/delete/lecture/:id', controllers.admin.post.deleteLecture);

    app.post('/enroll/:id', controllers.user.enroll);
    app.get('/details/:id', controllers.user.getDetails);
    app.get('/details/video/:id', controllers.user.getVideo);

    app.all('*', (req, res) => { res.status(404); res.send('404 Not Found'); res.end(); });
};