const userModel = function () {

    const register = function (params) {
        //TODO password validation
        let data = {
            username: params.username,
            password: params.password
        };

        let url = `/user/${storage.appKey}`;
        let auth = btoa(`${storage.appKey}:${storage.appSecret}`);
        let authString = `Basic ${auth}`;

        let headers = {
            headers: {
                Authorization: authString
            },
            body: JSON.stringify(data)
        }
        return requester.post(url, headers);
    };

    const login = function (params) {

        let url = `/user/${storage.appKey}/login`;
        let auth = btoa(`${params.username}:${params.password}`);
        let authString = `Basic ${auth}`;

        let headers = {
            headers: {
                Authorization: authString
            },
            body: JSON.stringify({ ...params })
        }

        return requester.post(url, headers);
    };

    return {
        register,
        login,
    }
}();