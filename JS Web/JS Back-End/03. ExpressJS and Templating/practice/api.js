const express = require('express');
const router = express.Router();
const users = require('./users');

// function middleware(req, res, next) {
//     // next(); //continue to next handler
//     next(new Error('Help!')); //throw error
// }
console.log(users);

function getCurrentUser(req, res, next) {
    setTimeout(function () {
        req.user = Number(req.params.id);
        next();
    }, 500);
}

function auth(req, res, next) {
    next(!!req.user ? undefined : new Error('Not allowed!'));
}

router.get('/user', (req, res) => {
    res.send(users);
});

router.get('/user/:id', getCurrentUser, auth, (req, res, next) => {
    console.log(req.params, '----', req.user);
    res.send(users.find(u => u.id === Number(req.params.id)));
    next();
}, function (req, res) {
    console.log('Test Chaining');
});

module.exports = router;