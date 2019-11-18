const app = Sammy("#main", function () {

    this.use("Handlebars", "hbs");

    // Home
    this.get("#/home", homeController.getHome);

    //User
    this.get("#/register", userController.getRegister);
    this.post("#/register", userController.postRegister);

    this.get("#/login", userController.getLogin);
    this.post("#/login", userController.postLogin);
    this.get("#/logout", userController.logout);

    this.get("#/about", userController.getAbout);

    //Catalog
    this.get("#/catalog", catalogController.getCatalog);
});

(() => {
    app.run("#/home")
})();