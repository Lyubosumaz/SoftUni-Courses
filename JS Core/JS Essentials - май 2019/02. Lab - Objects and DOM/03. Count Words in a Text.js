function solve(stringInput) {

    let cutInput = "";

    let regularExpression = (/(\w+)/g);
    for (let i = 0; i < stringInput.length; i++) {
        if (stringInput[i].match(regularExpression)) {
            cutInput += (stringInput[i].match(regularExpression));
        }
    }
    
    cutInput = cutInput.split(',');

    let output = {};

    for (let i = 0; i < cutInput.length; i++) {
        let key = cutInput[i];

        if (!output[key]) {
            Object.assign(output, { [key]: 0 });
        }
        output[key] += 1;
    }
    console.log(JSON.stringify(output));
}

// solve(['Far', 'too', 'slow', 'you', 're', 'far', 'too', 'slow']);
solve(['JS devs use Node.js for server-side JS.-- JS for devs']);