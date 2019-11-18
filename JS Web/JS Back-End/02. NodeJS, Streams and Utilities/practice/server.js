const fs = require('fs');
const server = require('http').createServer();
const port = 8080;

server.on('request', (req, res) => {
    const src = fs.createReadStream('./text.txt', { encoding: 'utf-8' });
    src.on('error', function (err) {
        console.error(err);
    });
    // src.on('data', data => res.write(data));
    // src.on('end', () => res.end());
    src.pipe(res);
});

server.listen(port, function () { console.log(`Server is listening on ${port}`) });
