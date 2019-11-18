const stream = require('stream');
const data = ['1', '2', '3', '4', null];

class MyReadableStream extends stream.Readable {
    constructor(opt) {
        super(opt)
    };

    _read() {
        data.forEach(item => this.push(item));
    }
}

class MyWritableStream extends stream.Writable {
    constructor(opt) {
        super(opt);
        this.result = '';
    }

    _write(chunk, encoding, next) {
        console.log(chunk.toString(), '_write');
        this.result += chunk;
        next();
    }
}

class MyTransformableStream extends stream.Transform {
    constructor(opt) {
        super(opt);
    }

    _transform(chunk, encoding, next) {
        const newChunk = `${parseInt(chunk) + 1}`;
        console.log(newChunk, '_transform');
        this.push(newChunk);
        next();
    }
}

const read = new MyReadableStream();
const write = new MyWritableStream();
const transform = new MyTransformableStream();

write.on('finish', function () {
    console.log(this.result);
});

read.pipe(transform).pipe(write);
