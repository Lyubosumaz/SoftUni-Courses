const models = require('../models');
const utils = require('../utils');
const appConfig = require('../app-config');


function loginGet(req, res) {
    const title = 'Login Form';
    res.render('login.hbs', { title })
}

function loginPost(req, res) {
    const { username, password } = req.body;
    models.userModel.findOne({ username })
        .then(user => Promise.all([user, user.matchPassword(password)]))
        .then(([user, match]) => {
            if (!match) {
                res.render('login.hbs', {
                    errors: {
                        userValid: {
                            message: 'Wrong password or username! Try again.'
                        }
                    }
                });
                return;
            }
            const token = utils.jwt.createToken({ id: user._id });
            res.cookie(appConfig.authCookieName, token).redirect('/');
            // const refreshSessionToken = utils.jwt.createRefreshSessionToken({ id: user._id });
            // res.cookie(appConfig.refreshCookieName, refreshSessionToken).redirect('/');
        });
}

function registerGet(req, res) {
    const title = 'Register Form';
    res.render('register.hbs', { title })
}

function registerPost(req, res, next) {
    const title = 'Register Form';
    const { username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        res.render('register.hbs', {
            title,
            errors: {
                repeatPassword: { message: 'Password and Re-Password does not match!' }
            }
        });
        return;
    }

    return models.userModel.create({ username, password })
        .then(() => {
            res.redirect('/login');
        }).catch(err => {
            if (err.name === 'ValidationError') {
                res.render('register.hbs', {
                    title,
                    errors: err.errors
                });
                return;
            }
            next(err);
        });
}

function logout(req, res) {
    const token = req.cookies[appConfig.authCookieName];
    models.tokenBlacklistModel.create({ token })
        .then(() => {
            res.clearCookie(appConfig.authCookieName)
                .redirect('/');
        });
}

function authSession(req, res) {
    const token = req.body.token;
    utils.jwt.verifyToken(token).then((newToken) => {
        res.json({ token: newToken })
    });
}

module.exports = {
    loginGet,
    loginPost,
    registerGet,
    registerPost,
    logout,
    authSession,
};