const config = require('./config');
const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect(config.dbURL, {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => console.log('Database is connected successfully and everything is ready!'))
        .catch(err => {
            console.error(err.message);
        });
};