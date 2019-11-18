function solve() {
    let typeCounter = {};

    for (let element of arguments) {
        let type = typeof element;
        
        if (type === "object") {
            console.log(`${type}: `);
        } else {
            console.log(`${type}: ${element}`);
        }

        if (typeCounter[type]) {
            typeCounter[type]++;
        } else {
            typeCounter[type] = 1;
        }
    }
    typeCounter = Object.entries(typeCounter).sort((a, b) => {
        return b[1] - a[1];
    }).forEach(el => {
        console.log(`${el[0]} = ${el[1]}`)
    });
}

solve('cat', 42, function () { console.log('Hello world!'); });