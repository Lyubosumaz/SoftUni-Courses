const Course = require('../models/Course');
const Lecture = require('../models/Lecture');

module.exports = {
    get: {
        createCourse: (req, res) => {
            // try { } catch (err) { console.log(err); }
            res.render('admin/create-course');
        },
        editCourse: async (req, res) => {
            try {
                const id = req.params.id;
                const course = await Course.findById({ _id: id });
                res.render('admin/edit-course', { course });
            } catch (err) { console.log(err); }
        },
        addLecture: async (req, res) => {
            try {
                const id = req.params.id;
                const course = await Course.findById({ _id: id }).populate('lectures');
                res.render('admin/add-lecture', { course });
            } catch (err) { console.log(err); }
        },
    },
    post: {
        createCourse: async (req, res) => {
            const { title, description, imageUrl } = req.body;
            const checkBox = req.body.isPublic === 'on';
            try {
                await Course.create({ title, description, imageUrl, isPublic: checkBox });
                res.redirect('/');
            } catch (err) { console.log(err); }
        },
        editCourse: async (req, res) => {
            const id = req.params.id;
            const { title, description, imageUrl } = req.body;
            const checkBox = req.body.isPublic === 'on';
            try {
                await Course.findByIdAndUpdate({ _id: id }, { title, description, imageUrl, isPublic: checkBox });
                res.redirect('/');
            } catch (err) { console.log(err); }
        },
        addLecture: async (req, res) => {
            const id = req.params.id;
            const { title, videoUrl } = req.body;
            try {
                const createLecture = await Lecture.create({ title, videoUrl, course: id });
                await Course.findByIdAndUpdate({ _id: id }, { $addToSet: { lectures: createLecture._id } });
                res.redirect('/');
            } catch (err) { console.log(err); }
        },
        deleteLecture: async (req, res) => {
            const lectureId = req.params.id;
            try {
                const lecture = await Lecture.findById({ _id: lectureId }).populate('course');
                let course = await Course.findById({ _id: lecture.course.id }).populate('lectures');
                course.lectures = course.lectures.filter(el => el.id.toString() !== lectureId.toString());
                await course.save()
                await Lecture.findByIdAndDelete({ _id: lectureId });
                res.redirect('/');
            } catch (err) { console.log(err); }
        },
    }
};