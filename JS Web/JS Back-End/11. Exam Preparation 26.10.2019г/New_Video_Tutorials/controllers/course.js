const Course = require('../models/Course');
const User = require('../models/User');

module.exports = {
    get: {
        create: (req, res) => {
            // try { } catch (err) { console.log(err); }
            // await User.findByIdAndUpdate({ _id: req.user.id }, { $addToSet: { created: id} });
            // await User.findByIdAndUpdate({ _id: req.user.id }, { $pull: { created: id } });
            res.render('course/create');
        },
        details: async (req, res) => {
            const id = req.params.id;
            try {
                const course = await Course.findById({ _id: id }).populate('creator').populate('users');
                const creatorCheck = course.creator.id === req.user.id;
                let enrollCheck = false;
                course.users.forEach((user) => { if (user.id === req.user.id) { return enrollCheck = true; } });
                res.render('course/details', { course, creatorCheck, enrollCheck })
            } catch (err) { console.log(err); }
        },
        edit: async (req, res) => {
            const id = req.params.id;
            try {
                const course = await Course.findById({ _id: id });
                res.render('course/edit', { course });
            } catch (err) { console.log(err); }
        }
    },
    post: {
        create: async (req, res) => {
            const { title, description, imageUrl, isPublic } = req.body;
            const viewData = Boolean(isPublic === 'on');
            try {
                const course = await Course.create({ title, description, imageUrl, isPublic: viewData, creator: req.user.id });
                await User.findByIdAndUpdate({ _id: req.user.id }, { $addToSet: { created: course.id } });
                res.redirect('/');
            } catch (err) { console.log(err); }
        },
        details: {},
        edit: async (req, res) => {
            const id = req.params.id;
            const { title, description, imageUrl, isPublic } = req.body;
            const viewData = Boolean(isPublic === 'on');
            try {
                await Course.findByIdAndUpdate({ _id: id }, { title, description, imageUrl, isPublic: viewData });
                res.redirect('/details/' + id);
            } catch (err) { console.log(err); }
        }
    },
    enroll: async (req, res) => {
        const id = req.params.id;
        try {
            await Course.findByIdAndUpdate({ _id: id }, { $addToSet: { users: req.user.id } });
            await User.findByIdAndUpdate({ _id: req.user.id }, { $addToSet: { courses: id } });
            res.redirect('/details/' + id);
        } catch (err) { console.log(err); }
    },
    delete: async (req, res) => {
        const id = req.params.id;
        try {
            await User.findByIdAndUpdate({ _id: req.user.id }, { $pull: { created: id } });
            await Course.findByIdAndDelete({ _id: id });
            res.redirect('/');
        } catch (err) { console.log(err); }
    },
    search: async (req, res) => {
        const { search } = req.body;
        let courses = await Course.find();
        courses = courses.filter(course => course.title.toLowerCase().includes(search.toLowerCase()));
        res.render('home/user', { courses });
    }
};