function solve(input) {
    let command = (function processor() {
        let arr = [];
        return {
            add: (el) => arr.push(el),
            remove: (el) => arr = arr.filter(item => item !== el),
            print: () => console.log(arr.join(",")),
        }
    })();

    input.forEach(element => {
        let tokens = element.split(/\s+/g).filter(i => i !== "");
        command[tokens[0]](tokens.length > 1 ? tokens[1] : undefined);
    });
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);