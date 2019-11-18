const catalogController = function () {

    const getCatalog = function (context) {

        helper.userTeam(context)
        helper.userLogged(context);


        context.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs"
        }).then(function () {
            this.partial("./templates/catalog/teamCatalog.hbs")
        })
    };

    return {
        getCatalog,
    }
}();