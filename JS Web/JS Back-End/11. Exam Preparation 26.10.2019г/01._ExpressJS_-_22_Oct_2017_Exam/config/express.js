const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const exphbsHelpers = require('../utils/hbs');

// const { cookieParserSecret } = require('../app-config');

module.exports = (app) => {
    // helpers: exphbsHelpers
    app.engine('.hbs',
    exphbs({
        extname: '.hbs',
        defaultLayout: false,
    })
    );
    app.use(bodyParser.urlencoded({ extended: false }));
    // app.use(cookieParser({ cookieParserSecret }));
    app.use('/static', express.static(path.resolve(__basedir, 'static')));
    app.set('/views', path.resolve(__basedir, 'views'));
};