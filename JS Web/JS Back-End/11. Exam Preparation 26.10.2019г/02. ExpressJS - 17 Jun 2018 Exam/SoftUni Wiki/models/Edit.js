const mongoose = require('mongoose');

const editSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdDate: { type: Date, default: Date.now },
    title: { type: String },
    content: { type: String, required: true },
    article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' }
});

module.exports = mongoose.model('Edit', editSchema);