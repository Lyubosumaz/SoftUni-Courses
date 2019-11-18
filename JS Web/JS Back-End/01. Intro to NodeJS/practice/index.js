const _ = require('lodash');
const fileManger = require('./file-manger.js');

//CPS
fileManger.readUsers(function (err, content) {
    if (err) {
        console.error(err);
        return;
    }
    const userArray = content.split(", ");
    console.log(_.chunk(userArray, 2));
});

console.log("Hello World!")