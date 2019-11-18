const fs = require('fs');

function readUsers(cb) {
    return fs.readFile('users.txt', { encoding: 'utf-8' }, function (err, content) {
        cb(err, content);
    });
}

module.exports = {
    readUsers,
};