const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    isLocked: { type: Boolean, default: false },
    creationDate: { type: Date, default: Date.now },
    edits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Edit' }]
});

module.exports = mongoose.model('Article', articleSchema);