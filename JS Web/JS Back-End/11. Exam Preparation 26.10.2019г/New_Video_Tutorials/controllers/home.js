const Course = require('../models/Course');

module.exports = {
    get: {
        index: async (req, res) => {
            if (req.user) {
                const courses = await Course.find();
                res.render('home/user', { courses });
            } else {
                const coursesPublic = await Course.find({ isPublic: true });
                res.render('home/guest', { coursesPublic });
            }
        }
    },
};