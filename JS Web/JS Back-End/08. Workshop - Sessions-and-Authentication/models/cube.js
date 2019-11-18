const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: [
            {
                validator: (v) => {
                    return /[a-zA-Z0-9\s]+/.test(v);
                },
                message: props => `${props.value} is not a valid Name!`
            }
        ],
        minlength: [5, 'Name should be at least 5 characters long!']
    },
    description: {
        type: String,
        required: true,
        validate: [
            {
                validator: (v) => {
                    return /[a-zA-Z0-9\s]+/.test(v);
                },
                message: props => `${props.value} is not a valid Description!`
            }
        ],
        minlength: [20, 'Description should be at least 20 characters long!']
    },
    imageUrl: {
        type: String,
        required: true,
        validate: [
            {
                validator: (v) => {
                    return /^https:\/{2}|^http:\/{2}/.test(v);
                },
                message: 'Please, make sure you are using a valid ImageUrl!'
            }
        ]
    },
    difficultyLevel: {
        type: Number,
        required: true
    },
    accessories: [{ type: mongoose.Types.ObjectId, ref: 'Accessories' }],
    creatorID: { type: mongoose.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Cube', cubeSchema);