const encryption = require('../util/encryption');
const User = require('mongoose').model('User');
const Course = require('../models/Course');
const Lecture = require('../models/Lecture');

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
                hashedPass,
                salt,
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
    getDetails: async (req, res) => {
        const courseId = req.params.id;
        const userId = req.user.id;
        try {
            const course = await Course.findById({ _id: courseId }).populate('lectures').populate('users');
            course.users.forEach(el => {
                console.log(el.id == userId)
                if (el.id.toString() == userId) {
                    return omegalul = true;
                }
            });

            res.render('user/details', { course, omegalul });
        } catch (err) { console.log(err); }
    },
    enroll: async (req, res) => {
        const courseId = req.params.id;
        const userId = req.user.id;
        try {
            await Course.findByIdAndUpdate({ _id: courseId }, { $addToSet: { users: userId } });
            await User.findByIdAndUpdate({ _id: userId }, { $addToSet: { enrolledCourses: courseId } });
            res.redirect('/details/' + courseId);
        } catch (err) { console.log(err); }
    },
    getVideo: async (req, res) => {
        const lectureId = req.params.id;
        try {
            const lecture = await Lecture.findById({ _id: lectureId }).populate('course');
            const course = await Course.findById({ _id: lecture.course.id }).populate('lectures');
            res.render('user/play-video', { lecture, course });
        } catch (err) { console.log(err); }
    },
};