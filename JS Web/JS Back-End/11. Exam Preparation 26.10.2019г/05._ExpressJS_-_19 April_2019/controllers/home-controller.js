const Course = require('../models/Course');

module.exports = {
    index: async (req, res) => {
        if (res.locals.isAdmin) {
            const courses = await Course.find();
            res.render('home/admin', { courses });
        } else if (res.locals.isUser) {
            const courses = await Course.find();
            res.render('home/user', { courses });
        } else {
            res.render('home/index');
        }
    }
};