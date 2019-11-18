function result(obj) {
    let method = obj.method;
    let isMethodValid = false;
    switch (method) {
        case "GET":
        case "POST":
        case "DELETE":
        case "CONNECT":
            isMethodValid = true;
            break;
        default:
            if (isMethodValid === false) {
                throw new Error("Invalid request header: Invalid Method");
            }
            break;
    }

    let uri = obj.uri;
    let pattern = /\.*[a-z0-9]+\.*[a-z0-9]*\.*[a-z0-9]*/gim;
    let isUriValid = false;
    if (uri.length > 0) {
        let matchedUri = uri.match(pattern)[0];
        if (matchedUri.length === uri.length) {
            isUriValid = true;
        }
    }
    if (isUriValid === false) {
        throw new Error("Invalid request header: Invalid URI");
    }

    let version = obj.version;
    let isVersionValid = false;
    switch (version) {
        case "HTTP/0.9":
        case "HTTP/1.0":
        case "HTTP/1.1":
        case "HTTP/2.0":
            isVersionValid = true;
            break;
        default:
            if (isVersionValid === false) {
                throw new Error("Invalid request header: Invalid Version");
            }
            break;
    }

    let message = obj.message;
    let specialChars = /[\<\>\\\&\'\"]/g;
    let isMessageValid = true;
    if (message.match(specialChars)) {
        isMessageValid = false;
        if (isMessageValid === false) {
            throw new Error("Invalid request header: Invalid Message");
        }
    }

    // console.log(isMethodValid, isUriValid, isVersionValid, isMessageValid)
    // console.log(method, uri, version, message)

    if (isMethodValid === true
        && isUriValid === true
        && isVersionValid === true
        && isMessageValid === true) {
        return obj;
    }
}

// solve({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: '',
// });
// solve({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// });
// solve({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
// });

module.exports = { result };