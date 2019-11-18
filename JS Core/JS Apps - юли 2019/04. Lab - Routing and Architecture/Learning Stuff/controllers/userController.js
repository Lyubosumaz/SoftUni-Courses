const userController = function () {

    const getRegister = function (context) {

        context.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs"
        }).then(function () {
            this.partial("./templates/register/registerPage.hbs")
        })
    };

    const postRegister = function (context) {

        userModel.register(context.params)
            .then((data) => {
                // storage.saveUser(data);
                context.redirect("#/login");
            })
    };

    const getLogin = function (context) {

        context.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs"
        }).then(function () {
            this.partial("./templates/login/loginPage.hbs")
        })
    };

    const postLogin = function (context) {

        userModel.login(context.params)
    
        .then((data) => {
                storage.saveUser(data);
                context.redirect("#/home");
            })
    };

    const logout = function (context) {
        storage.deleteUser();
        context.redirect("#/home");
    };

    const getAbout = function (context) {

        helper.userLogged(context);

        context.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs"
        }).then(function () {
            this.partial("./templates/about/about.hbs")
        })
    };

    return {
        getRegister,
        postRegister,
        getLogin,
        postLogin,
        logout,
        getAbout,
    }
}();