const requester = function () {

    const baseUrl = "https://baas.kinvey.com";

    const appKey = "kid_HkFiDJ0fB";
    const appSecret = "0ee62176546d4cdf92ba6df0ae2e4522";

    const get = function (endpoint, mod, type) {
        const headers = makeHeaders(type, "GET");
        const url = `${baseUrl}/${mod}/${appKey}/${endpoint}`;

        return fetch(url, headers);
    };

    const post = function (endpoint, mod, type, data) {
        const headers = makeHeaders(type, "POST", data);
        const url = `${baseUrl}/${mod}/${appKey}/${endpoint}`;

        return fetch(url, headers);
    };

    const put = function (endpoint, mod, type, data) {
        const headers = makeHeaders(type, "PUT", data);
        const url = `${baseUrl}/${mod}/${appKey}/${endpoint}`;

        return fetch(url, headers);
    };

    const del = function (endpoint, mod, type) {
        const headers = makeHeaders(type, "DELETE");
        const url = `${baseUrl}/${mod}/${appKey}/${endpoint}`;

        return fetch(url, headers);
    };

    const makeAuth = (type) => {
        return type === "Basic"
            ? "Basic " + btoa(appKey + ":" + appSecret)
            : "Kinvey " + sessionStorage.getItem("authtoken")
    }

    const makeHeaders = (type, httpMethod, data) => {
        const headers = {
            method: httpMethod,
            headers: {
                "Authorization": makeAuth(type),
                "Content-Type": "application/json"
            }
        };

        if (httpMethod === "POST" || httpMethod === "PUT") {
            headers.body = JSON.stringify(data);
        }

        return headers;
    }

    return {
        get,
        post,
        del,
        put,
    }
}();