const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true, maxlength: 50 },
    imageUrl: { type: String, required: true },
    isPublic: { type: Boolean, default: false },
    lectures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lecture' }],
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;