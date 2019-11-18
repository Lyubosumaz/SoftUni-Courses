const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secret = 'MySuperPrivateSecret';
const options = { expiresIn: '2d' };

const app = express();
const post = 8080;

const p = new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), 1000);
});

p.then(number => {
    return Promise.all([number, p2]);
}).then(([r1, r2]) => {
    //Some code..
});


let users = [{
    id: 1,
    username: 'user1',
    password: '123',
    authLevel: 4
}];

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'my secret',
    httpOnly: true,
    resave: false,
    saveUninitialized: true,
}));

app.get('/register', (req, res) => {
    res.sendFile(path.resolve('pages', 'register.html'));
});

app.post('/register', (req, res, next) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    if (user) {
        res.sendFile(path.resolve('pages', 'register.html'));
        return;
    }
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            next(err);
            return;
        }
        users = users.concat({ id: 2, username, password: hash });
        res.redirect('/');
    });
});

app.get('/logout', (req, res) => {
    // req.session.destroy((err) => {
    //     if (err) {
    //         console.error(err);
    //         res.status(500).send(err.message);
    //     }
    //     res.redirect('/');
    // });
    res.clearCookie('auth_cookie').redirect('/');
    //blacklist database table for all tokens that haven't expired
});

function auth(authLevel) {
    return (req, res, next) => {
        // const authUser = users.find(user => { return user.id === req.session.userId });
        const token = req.cookies['auth_cookie'];
        const data = jwt.verify(token, secret);
        const authUser = users.find(user => { return user.id === data.userId });
        if (!authUser) {
            res.status(401).send('401');
            return;
        }
        req.user = authUser;
        next();
    }
}

app.get('/protected', auth(4), (req, res) => {
    res.send('This is protected')
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve('pages', 'login.html'));
});

app.post('/login', (req, res, next) => {
    const authUser = users.find(user => user.username === req.body.username);
    if (!authUser) {
        res.sendFile(path.resolve('pages', 'login.html'));
        return;
    }
    bcrypt.compare(req.body.password, authUser.password).then(result => {
        if (!result) {
            res.sendFile(path.resolve('pages', 'login.html'));
            return;
        }
        const token = jwt.sign({ userId: authUser.id }, secret, options);
        // req.session.userId = authUser.id;
        res.cookie('auth_cookie', token).redirect('/');
    }).catch(next);
});

app.get('/', (req, res) => {
    res.send('Default page');
    // res.cookie('test_cookie', { test: 123 }).send('HELLO!');
    // res.locals;
});

app.listen(post, () => {
    console.log(`Server is listening on port ${post}`);
});