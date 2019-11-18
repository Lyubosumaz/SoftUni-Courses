const movieController = function () {

    const getCreate = function (context) {

        helper.allHeaderInfo(context);

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function () {
            this.partial('../views/movies/create.hbs')
        })
    };

    const postCreate = function (context) {

        helper.allHeaderInfo(context);

        const payload = {
            title: context.params.title,
            imageUrl: context.params.imageUrl,
            description: context.params.description,
            genres: context.params.genres,
            tickets: Number(context.params.tickets),
        }

        requester.post("movies", "appdata", "Kinvey", payload)
            .then(helper.handler)
            .then(() => {
                context.redirect("#/cinema");
            });
    };

    const getCinema = function (context) {

        helper.allHeaderInfo(context);

        const sort = JSON.stringify({
            "tickets": -1
        });
        const endpoint = `movies?query={}&sort=${sort}`;
        // const endpoint = "movies?query={}&sort={\"tickets\": -1}";
        requester.get(endpoint, "appdata", "Kinvey")
            .then(helper.handler)
            .then((data) => {
                context.movies = data;

                context.loadPartials({
                    header: "../views/common/header.hbs",
                    footer: "../views/common/footer.hbs",
                    "single-movie": "../views/movies/single-movie.hbs"
                }).then(function () {
                    this.partial('../views/movies/cinema.hbs')
                })
            })

        // //Is is much easier with asynchronous!! Add: async in the function!!    
        // try {
        //     const response = await requester.get("movies?query={}&sort={\"tickets\": -1}", "appdata", "Kinvey");
        //     context.movies = await response.json();

        //     context.loadPartials({
        //         header: "../views/common/header.hbs",
        //         footer: "../views/common/footer.hbs",
        //         "single-movie": "../views/movies/single-movie.hbs"
        //     }).then(function () {
        //         this.partial('../views/movies/cinema.hbs')
        //     })
        // } catch (err) {
        //     console.log(err);
        // }
    };

    const getMyMovies = function (context) {

        helper.allHeaderInfo(context);

        const endpoint = `movies?query={"_acl.creator":"${sessionStorage.getItem("userId")}"}`;
        requester.get(endpoint, "appdata", "Kinvey")
            .then(helper.handler)
            .then((data) => {
                context.movies = data;

                context.loadPartials({
                    header: "../views/common/header.hbs",
                    footer: "../views/common/footer.hbs",
                    "my-single-movie": "../views/movies/my-single-movie.hbs"
                }).then(function () {
                    this.partial('../views/movies/my-movies.hbs')
                })
            })
    };

    const getEdit = function (context) {

        helper.allHeaderInfo(context);

        const endpoint = "movies/" + context.params.id;
        requester.get(endpoint, "appdata", "Kinvey")
            .then(helper.handler)
            .then((data) => {
                Object.keys(data).forEach((key) => {
                    context[key] = data[key];
                });
                // context.genres = context.genres.split(" ").join(",");
                //There will be problem if I is like that..

                context.loadPartials({
                    header: "../views/common/header.hbs",
                    footer: "../views/common/footer.hbs",
                }).then(function () {
                    this.partial('../views/movies/edit.hbs')
                })
            })
    };

    const postEdit = function (context) {

        helper.allHeaderInfo(context);

        const payload = {
            title: context.params.title,
            imageUrl: context.params.imageUrl,
            description: context.params.description,
            genres: context.params.genres,
            tickets: Number(context.params.tickets),
        }

        const endpoint = "movies/" + context.params.id;
        requester.put(endpoint, "appdata", "Kinvey", payload)
            .then(helper.handler)
            .then(() => {
                context.redirect("#/movie/user");
            })
    };

    const getDelete = function (context) {

        helper.allHeaderInfo(context);

        const endpoint = "movies/" + context.params.id;
        requester.get(endpoint, "appdata", "Kinvey")
            .then(helper.handler)
            .then((data) => {
                Object.keys(data).forEach((key) => {
                    context[key] = data[key];
                });
                context.genres = context.genres.split(" ").join(",");

                context.loadPartials({
                    header: "../views/common/header.hbs",
                    footer: "../views/common/footer.hbs",
                }).then(function () {
                    this.partial('../views/movies/delete.hbs')
                })
            })
    };

    const postDelete = function (context) {

        helper.allHeaderInfo(context);

        const endpoint = "movies/" + context.params.id;
        requester.del(endpoint, "appdata", "Kinvey")
            .then(helper.handler)
            .then(() => {
                context.redirect("#/home");
            })
    };

    const getPutBuy = function (context) {

        helper.allHeaderInfo(context);

        const endpoint = "movies/" + context.params.id;
        requester.get(endpoint, "appdata", "Kinvey")
            .then(helper.handler)
            .then((data) => {
                data.tickets--;

                return requester.put(endpoint, "appdata", "Kinvey", data)
            })
            .then(helper.handler)
            .then(() => {
                context.redirect("#/cinema")
            })
    };

    const getDetails = function (context) {

        helper.allHeaderInfo(context);

        const endpoint = "movies/" + context.params.id;
        requester.get(endpoint, "appdata", "Kinvey")
            .then(helper.handler)
            .then((data) => {
                Object.keys(data).forEach((key) => {
                    context[key] = data[key];
                });
                context.genres = context.genres.split(" ").join(",");

                context.loadPartials({
                    header: "../views/common/header.hbs",
                    footer: "../views/common/footer.hbs",
                }).then(function () {
                    this.partial('../views/movies/details.hbs')
                })
            })
    };

    return {
        getCreate,
        postCreate,
        getCinema,
        getMyMovies,
        getEdit,
        postEdit,
        getDelete,
        postDelete,
        getDetails,
        getPutBuy,
    }
}();