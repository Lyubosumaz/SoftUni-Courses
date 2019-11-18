window.onload = () => {

    Sammy("#container", function () {

        this.use("Handlebars", "hbs");

        // Home
        this.get("/", homeController.getHome);
        this.get("#/home", homeController.getHome);

        // User
        this.get("#/register", userController.getRegister);
        this.post("#/register", userController.postRegister);

        this.get("#/login", userController.getLogin);
        this.post("#/login", userController.postLogin);

        this.get("#/logout", userController.logout);

        //Movies
        this.get("#/movie/create", movieController.getCreate);
        this.post("#/movie/create", movieController.postCreate);

        this.get("#/cinema", movieController.getCinema);
        this.get("#/movie/user", movieController.getMyMovies);

        this.get("#/movie/edit/:id", movieController.getEdit);
        this.post("#/movie/edit/:id", movieController.postEdit);
        this.get("#/movie/delete/:id", movieController.getDelete);
        this.post("#/movie/delete/:id", movieController.postDelete);

        this.get("#/movie/details/:id", movieController.getDetails);
        this.get("#/movie/buy/:id", movieController.getPutBuy);

    }).run("/");
}  