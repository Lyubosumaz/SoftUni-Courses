global.__basedir = __dirname;
const dbConnector = require('./config/db');

dbConnector().then(() => {
    const config = require('./config/config');
    const app = require('express')();

    require('./config/express')(app);
    require('./config/routes')(app);
    require('./config/passport')();
    // app.use(function (err, req, res, next) {
    //     console.error(err);
    //     const title = 'Server Error';
    //     res.render('500.hbs', {
    //         title,
    //         errorMessage: err.message
    //     });
    // });

    app.listen(config.port, console.log(`***Server is listening on port ${config.port}! Now its up to you..***`));
}).catch(console.error);