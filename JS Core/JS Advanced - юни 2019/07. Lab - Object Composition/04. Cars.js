function solve(input) {
    let command = (function () {
        let obj = {};
        function create(string) {
            let tokens = string.split(/\s+/);
            let name = tokens[1];
            if (tokens.length > 2) {
                obj[name] = Object.create(obj[tokens[3]])
            } else {
                obj[name] = {}
            }
        }

        function set(string) {
            let tokens = string.split(/\s+/);
            let objName = tokens[1];
            let key = tokens[2];
            let value = tokens[3];
            obj[objName][key] = value;
        }

        function print(string) {
            let tokens = string.split(/\s+/);
            let name = tokens[1];

            let output = [];
            let currentObj = obj[name];
            for (let key in currentObj) {
                output.push(`${key}:${currentObj[key]}`);
            }

            console.log(output.join(", "));
        }

        return { create, set, print }
    })();
    for (let element of input) {
        let commandName = element.split(/\s+/)[0];
        
        command[commandName](element);
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);