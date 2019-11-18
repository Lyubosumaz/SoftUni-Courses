const storage = function () {

    const appKey = "kid_ryI615OfH";
    const appSecret = "5810223d357b439184bff184f06982eb";

    const getData = function (key) {
        let userData = JSON.parse(window.localStorage.getItem(key + appKey));
        return userData || {};
    };

    const saveData = function (key, value) {
        localStorage.setItem(key + appKey, JSON.stringify(value));
    };

    const saveUser = function (data) {
        saveData("userInfo", data)
        saveData("authToken", data._kmd.authtoken)
    };

    const deleteUser = function () {
        localStorage.removeItem("userInfo" + appKey);
        localStorage.removeItem("authToken" + appKey);
    };

    return {
        appKey,
        appSecret,
        getData,
        saveData,
        saveUser,
        deleteUser,
    };
}();