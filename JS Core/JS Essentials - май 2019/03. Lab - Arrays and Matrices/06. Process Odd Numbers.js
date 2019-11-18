function solve(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            output.unshift(arr[i] * 2);
        }
    }
    console.log(output.join(' '));

    // let doubledOddPositions = arr => arr.filter((e, i) => i % 2 !== 0).reverse().map(e => e * 2).join(' ');
}
solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);