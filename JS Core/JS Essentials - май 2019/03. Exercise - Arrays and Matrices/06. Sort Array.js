function solve(array) {
    array.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    }).forEach(e => console.log(e));
}

solve(['alpha', 'beta', 'gamma']);
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
solve(['test', 'Deny', 'omen', 'Default']);