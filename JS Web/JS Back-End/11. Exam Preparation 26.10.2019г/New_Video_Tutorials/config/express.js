const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const exphbsHelpers = require('../utils/hbs');
const { cookieParserSecret } = require('../app-config');

module.exports = (app) => {
    app.set('view engine', 'hbs');

    app.engine('.hbs', exphbs({
        extname: '.hbs',
        layoutsDir: path.resolve(__basedir, 'views'),
        defaultLayout: path.resolve(__basedir, 'views/layouts/main'),
        partialsDir: path.resolve(__basedir, 'views/partials'),
        helpers: exphbsHelpers
    }));
    app.use(cookieParser(cookieParserSecret));
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false
    }));

    app.use(passport.initialize());
    app.use(passport.session());
    app.use((req, res, next) => {
        if (req.user) {
            // if (req.user.roles === 'Admin') {
            //     res.locals.isAdmin = true;
            // }
            res.locals.currentUser = req.user;
            res.locals.isUser = true;
        }
        next();
    });

    app.use('/static', express.static(path.resolve(__basedir, 'static')));
};