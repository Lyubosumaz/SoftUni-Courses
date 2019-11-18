const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // validate: {
        //     validator: function(v){
        //         return /\d{3}-\d{3}-\d{4}/.test(v);
        //     },
        //     message: props => `${props.value} is not a valid`
        // },
    },
    description: String,
    imageUrl: String,
    difficultyLevel: {
        type: Number,
        min: 1,
        max: 6
    }
});

cubeSchema.methods.getDestination = function () {
    return this.description;
}

module.exports = mongoose.model('Cube', cubeSchema);