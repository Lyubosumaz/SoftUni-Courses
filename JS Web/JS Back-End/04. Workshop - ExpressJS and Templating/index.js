const env = process.env.NODE_ENV || 'development';
global.__basedir = __dirname;


//Test Model
// const cubeModel = require('./models/cubeModel');
// console.log(cubeModel.getAll());
// console.log(cubeModel.getOne(1));
// cubeModel.update(13, {
//     "id": 13,
//     "name": "bbbbbbbbb",
//     "description": "bbbbbbbbb",
//     "imageUrl": "bbbbbbbbbbb",
//     "difficultyLevel": "6"
// }).then(updated => { 
//     console.log(updated); 
// });
// cubeModel.insert({ name: 'test1', desc: 'test1' }).then(insertedCube => {
//     console.log(insertedCube);
//     return cubeModel.delete(insertedCube.id);
// }).then(() => {
//     console.log('lastIndex should be 1 and we should not have any cubes');
// });


const config = require('./config/config')[env];
const app = require('express')();

require('./config/express')(app);
require('./config/routes')(app);

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));