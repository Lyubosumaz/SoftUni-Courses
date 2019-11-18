class EventEmitter {
    constructor() {
        this.subscriptions = {};
    };

    subscribe(eventName, cb) {
        this.subscriptions[eventName] = (this.subscriptions[eventName] || []).concat([cb]);
        const cbIndex = this.subscriptions[eventName].length - 1;

        // same as
        // if (!this.subscriptions[eventName]) {
        //     this.subscriptions[eventName] = [];
        // }
        // this.subscriptions[eventName] = this.subscriptions[eventName].concat([cb]);
        // or this.subscriptions[eventName].push(cb);

        return () => {
            this.subscriptions[eventName].splice(cbIndex);
            // this.subscriptions[eventName] = [
            //     ...this.subscriptions[eventName].slice(0, cbIndex),
            //     ...this.subscriptions[eventName].slice(cbIndex + 1)
            // ];
            // same as
            // this.subscriptions[eventName].slice(0, cbIndex).concat(this.subscriptions[eventName].slice(cbIndex + 1));
        }
    }

    once(eventName, cb) {
        const unsub = this.subscribe(eventName, data => {
            cb(data);
            unsub();
        });
    }

    emit(eventName, data) {
        (this.subscriptions[eventName] || []).forEach(cb => {
            cb(data);
            // console.log(this.subscriptions);
        });
    }
};

const emitter = new EventEmitter();
const unsub = emitter.subscribe("getData", console.log);
emitter.subscribe("getData", console.log);
emitter.subscribe("getData", console.log);

emitter.emit("getData", "Testing...");
// unsub();
// console.log("-------------------------");
emitter.once("getData", console.log());
emitter.emit("getData", "Testing...");

// const user = { firstName: "Ivan", obj: { prop: 1 } };
// const { firstName, obj: { prop } } = user