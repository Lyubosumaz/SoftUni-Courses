const express = require('express');
const port = 8080;
const app = express();
const users = require('./users');
users.pop();
const api = require('./api');
const handlebars = require('express-handlebars');

app.use(express.static(__dirname + '/public'));
app.engine('.hbs', handlebars({ extname: '.hbs' }));
app.set('views', __dirname + '/views');

function defaultUsers(req, res) {
    res.render('index.hbs', {
        title: 'Some title',
        data: 'Some data',
        users,
    });
}
// function defaultUsers(req, res) {
//     res.send('<h1>Hello World!</h1><script async defer src="index.js"></script>');
// }

app.use((req, res, next) => {
    console.log('Time', Date.now(), '---- global middleware in index.js');
    next();
});

app.use('/api', api);

app.get('/', defaultUsers);
app.get('/home', defaultUsers);
app.get('/test', (req, res) => {
    res.render('test.hbs');
});

// app.get('/user/:id', (req, res) => {
//     const user = users.find(u => u.id === Number(req.params.id));
//     res.send(user || 'Nothing found!');
// });

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!')
})

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});