// const env = process.env.NODE_ENV || 'development';
global.__basedir = __dirname;

//Test Model
// const cubeModel = require('./models/cubeModel');
// console.log(cubeModel.getAll());
// console.log(cubeModel.getOne(1));
// cubeModel.update(9, { name: "test test", desc: "test2x2" }).then(updated => { console.log(updated); });
// cubeModel.insert({ name: 'test1', desc: 'test1' }).then(insertedCube => {
//     console.log(insertedCube);
//     return cubeModel.delete(insertedCube.id);
// }).then(() => {
//     console.log('lastIndex should be 1 and we should not have any cubes');
// });

// const config = require('./config/config')[env];
const dbConnector = require('./config/db');
// const mongoose = require('mongoose');
dbConnector().then(() => {

    // const studentSchema = new mongoose.Schema({
    //     name: String,
    //     teacher: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Teacher'
    //     },
    //     subject: [{
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Subject'
    //     }]
    // });

    // const subjectSchema = new mongoose.Schema({
    //     title: String,
    //     students: [{
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Student'
    //     }]
    // });

    // const teacherSchema = new mongoose.Schema({
    //     title: String,
    //     students: [{
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Student'
    //     }]
    // });

    // const StudentModel = mongoose.model('Student', studentSchema);
    // const SubjectModel = mongoose.model('Subject', subjectSchema);
    // const TeacherModel = mongoose.model('Teacher', teacherSchema);

    // // TeacherModel.insertMany([{ name: "Teacher 1", students: [] }]).then(() => {
    // //     console.log('teacher was added');
    // // });

    // // StudentModel.insertMany([{ name: 'Student 1', teacher: '' }]).then(() => {
    // //     console.log("student has been added");
    // // });

    // StudentModel.findById('').then(student => {
    //     console.log(student);
    // });

    const config = require('./config/config');
    const app = require('express')();

    require('./config/express')(app);
    require('./config/routes')(app);

    app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));
}).catch(console.error);

//Test DB
// // const mongodb = require('mongodb');
// // const MongoClient = mongodb.MongoClient;
// const dbUrl = 'mongodb://localhost:27017';
// const { MongoClient } = require('mongodb');
// const client = new MongoClient(dbUrl);
// client.connect(function (err, client) {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     const db = client.db('testdb');
//     const users = db.collection('users');

//     users.insert({ name: "test" }).then(qr => {
//         console.log(qr);
//         users.deleteMany({ name: 'test' }).then(qr => {
//             console.log(qr);
//         })
//     })
// });