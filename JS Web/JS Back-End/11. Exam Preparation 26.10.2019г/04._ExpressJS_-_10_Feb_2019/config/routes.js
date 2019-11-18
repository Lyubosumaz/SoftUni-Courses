const controllers = require('../controllers');
const restrictedPages = require('./auth');

module.exports = app => {
    app.get('/', controllers.home.index);
    app.get('/register', restrictedPages.isAnonymous, controllers.user.registerGet);
    app.post('/register', restrictedPages.isAnonymous, controllers.user.registerPost);
    app.get('/login', restrictedPages.isAnonymous, controllers.user.loginGet);
    app.post('/login', restrictedPages.isAnonymous, controllers.user.loginPost);
    app.post('/logout', controllers.user.logout);

    app.get('/profile', restrictedPages.isAuthed, controllers.user.getProfile);

    app.get('/create/team', restrictedPages.hasRole('Admin'), controllers.admin.get.createTeam);
    app.post('/create/team', restrictedPages.hasRole('Admin'), controllers.admin.post.createTeam);
    app.get('/create/project', restrictedPages.hasRole('Admin'), controllers.admin.get.createProject);
    app.post('/create/project', restrictedPages.hasRole('Admin'), controllers.admin.post.createProject);

    app.get('/manage/projects', restrictedPages.hasRole('Admin'), controllers.admin.get.manageProjects);
    app.post('/manage/projects', restrictedPages.hasRole('Admin'), controllers.admin.post.manageProjects);
    app.get('/manage/teams', restrictedPages.hasRole('Admin'), controllers.admin.get.manageTeams);
    app.post('/manage/teams', restrictedPages.hasRole('Admin'), controllers.admin.post.manageTeams);

    app.get('/projects', restrictedPages.isAuthed, controllers.user.getProjects);
    app.get('/projects/search', restrictedPages.isAuthed, controllers.user.postProjects);
    app.get('/teams', restrictedPages.isAuthed, controllers.user.getTeams);
    app.get('/teams/search', restrictedPages.isAuthed, controllers.user.postTeams);

    app.all('*', (req, res) => { res.status(404); res.send('404 Not Found'); res.end(); });
};