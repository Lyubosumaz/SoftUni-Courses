const homeController = function () {

    const getHome = function (context) {

        helper.userLogged(context);

        context.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs"
        }).then(function () {
            this.partial("./templates/home/home.hbs")
        })
    };

    return {
        getHome,
    }
}();