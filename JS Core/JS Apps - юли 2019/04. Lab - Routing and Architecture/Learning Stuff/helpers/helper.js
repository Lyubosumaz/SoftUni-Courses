const helper = function () {

    const handler = function (response) {
        if (response.status >= 400) {
            throw new Error(`Something went wrong: ${response.statusText}`)
        }

        return response.json();
    }

    const userLogged = function (context) {

        const loggedIn = storage.getData("userInfo");
        const username = storage.getData("userInfo").username;

        if (Object.keys(loggedIn).length !== 0) {
            context.loggedIn = loggedIn;
            context.username = username;
        }
    }

    const userTeam = function (context) {
        let url = `https://baas.kinvey.com/appdata/${storage.appKey}/LearningStuff`;
        let header = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                credentials: "include",
                Authorization: "Basic " + btoa("1:1")
            }
        };

        fetch(url, header)
            .then(helper.handler)
            .then((data) => {
                (data.length == 0)
                    ? context.hasNoTeam = data
                    : context.hasNoTeam = data;

            })
    };

    return {
        handler,
        userLogged,
        userTeam,
    }
}();