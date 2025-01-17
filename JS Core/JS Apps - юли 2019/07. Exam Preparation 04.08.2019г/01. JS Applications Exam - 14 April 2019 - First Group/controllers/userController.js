const userController = function () {

    const getRegister = function (context) {

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function () {
            this.partial('../views/user/registerPage.hbs')
        })
    };

    const getLogin = function (context) {
        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function () {
            this.partial('../views/user/loginPage.hbs')
        })
    };

    const postRegister = function (context) {

        helper.notify("loading")
        userModel.register(context.params)
            .then(helper.handler)
            .then((data) => {
                helper.stopNotify();
                helper.notify("success", "You have successfully registered!")
                storage.saveUser(data);
                homeController.getHome(context);
            })
    };

    const postLogin = function (context) {

        helper.notify("loading")
        userModel.login(context.params)
            .then(helper.handler)
            .then((data) => {
                helper.stopNotify();
                helper.notify("success", "You just logged-in!")
                storage.saveUser(data);
                homeController.getHome(context);
            })
    };

    const logout = function (context) {
        //TODO  something is wrong
        userModel.logout()
            .then(helper.handler)
            .then(() => {
                storage.deleteUser();
                homeController.getHome(context);
            });
    };

    return {
        getRegister,
        postRegister,
        getLogin,
        postLogin,
        logout
    }
}();