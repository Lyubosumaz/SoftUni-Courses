function getHome(req, res) {
    res.render('index.hbs');
}

function getRegister(req, res) {
    res.render('register.hbs');
}

module.exports = {
    getHome,
};