const http = require("http");
const url = require("url");
const port = 8080;

const arr = [1,2,3]

const app = http.createServer(function (req, res) {
    // console.log(req.headers);
    // res.write("Hello");
    // setTimeout(function () {
    //     res.write(" ");
    //     res.end("World!");
    // }, 10000);
    const { pathname } = url.parse(req["url"]);
    if (pathname === "/") {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(arr));
        return;
    }
    if (pathname === "/about") {
        res.end("About");
        return;
    }
});

app.listen(port, function () {
    console.log(`Server is listening on ${port}`)
});