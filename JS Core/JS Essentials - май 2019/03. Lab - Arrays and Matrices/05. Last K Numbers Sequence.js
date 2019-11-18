function solve(n, k) {
    let output = [1];

    for (let i = 0; i < n; i++) {
        let current = output.slice(k * -1).reduce((a, b) => a + b);

        output[i] = current;
    }
    console.log(output.join(' ')); 
}
solve(6, 3);
solve(8, 2);