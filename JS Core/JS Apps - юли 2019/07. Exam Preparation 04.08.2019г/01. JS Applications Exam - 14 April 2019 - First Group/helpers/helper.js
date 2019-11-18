const helper = function () {

    const handler = function (response) {

        if (response.status >= 400) {
            stopNotify();
            notify("error", response.statusText);
            throw new Error(`Something went wrong. Error: ${response.statusText}`);
        }

        if (response.status !== 204) {
            response = response.json();
        }

        return response;
    };

    const userLogged = async function (context) {

        const loggedIn = storage.getData("userInfo") !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData("userInfo")).username;
            context.loggedIn = loggedIn;
            context.username = username;
        }
    }

    const passwordCheck = function (params) {
        return params.password === params.rePassword;
    };

    const notify = function (type, textContent) {

        let element = "";

        switch (type) {
            case "success":
                element = document.getElementById("successBox");
                element.textContent = textContent;
                element.addEventListener("click", (event) => event.currentTarget.style.display = "none")
            case "error":
                element = document.getElementById("errorBox");
                element.textContent = textContent;
                element.addEventListener("click", (event) => event.currentTarget.style.display = "none")
            case "loading":
                element = document.getElementById("loadingBox");
                element.textContent = "Loading...";
        }
        element.style.display = "block";
    };

    const stopNotify = function () {
        Array.from(document.getElementById("notifications").children)
            .forEach((child) => {
                child.style.display = "none";
            })
    }

    return {
        handler,
        userLogged,
        passwordCheck,
        notify,
        stopNotify,
    }
}();