const encryption = require('../util/encryption');
const User = require('mongoose').model('User');
const Team = require('../models/Team');
const Project = require('../models/Project');


module.exports = {
    registerGet: (req, res) => {
        res.render('users/register');
    },
    registerPost: async (req, res) => {
        const reqUser = req.body;
        const salt = encryption.generateSalt();
        const hashedPass =
            encryption.generateHashedPassword(salt, reqUser.password);
        try {
            const user = await User.create({
                username: reqUser.username,
                salt,
                hashedPass,
                firstName: reqUser.firstName,
                lastName: reqUser.lastName,
                profilePicture: reqUser.profilePicture,
                roles: 'User'
            });
            req.logIn(user, (err, user) => {
                if (err) {
                    res.locals.globalError = err;
                    res.render('users/register', user);
                } else {
                    res.redirect('/');
                }
            });
        } catch (e) {
            console.log(e);
            res.locals.globalError = e;
            res.render('users/register');
        }
    },
    logout: (req, res) => {
        req.logout();
        res.redirect('/');
    },
    loginGet: (req, res) => {
        res.render('users/login');
    },
    loginPost: async (req, res) => {
        const reqUser = req.body;
        try {
            const user = await User.findOne({ username: reqUser.username });
            if (!user) {
                errorHandler('Invalid user data');
                return;
            }
            if (!user.authenticate(reqUser.password)) {
                errorHandler('Invalid user data');
                return;
            }
            req.logIn(user, (err, user) => {
                if (err) {
                    errorHandler(err);
                } else {
                    res.redirect('/');
                }
            });
        } catch (e) {
            errorHandler(e);
        }

        function errorHandler(e) {
            console.log(e);
            res.locals.globalError = e;
            res.render('users/login');
        }
    },
    getProfile: async (req, res) => {
        const teams = await Team.find({ members: req.user.id });
        res.render('users/profile', { teams });
    },
    getProjects: async (req, res) => {
        res.render('users/projects');
    },
    postProjects: async (req, res) => {
        const search = req.query.search.toLowerCase();
        try {
            const projects = await Project.find().populate('team');
            const data = projects.filter(p => p.name.toLowerCase().includes(search));
            res.render('users/projects', { data });
        } catch (err) { console.log(err); }
    },
    getTeams: async (req, res) => {
        res.render('users/teams');
    },
    postTeams: async (req, res) => {
        const search = req.query.search.toLowerCase();
        try {
            const teams = await Team.find().populate('projects').populate('members');
            const data = teams.filter(p => p.name.toLowerCase().includes(search));
            res.render('users/teams', { data });
        } catch (err) { console.log(err); }
    },
};