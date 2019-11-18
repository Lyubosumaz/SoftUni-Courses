const events = require('events');

const emitter = new events.EventEmitter();

emitter.on('end', console.log);
emitter.on('click', (a, b) => {
    console.log('A click has been detected!');
    console.log(a + ' ' + b);
});

setTimeout(() => {
    emitter.emit('end', 'World says, hello!');
}, 3000);

emitter.emit('click', 'Hello', 'World!');