function aggregates(arr) {
    console.log("Sum = ", solve(arr, (a, b) => a + b, 0));
    console.log("Min = ", solve(arr, (a, b) => Math.min(a, b), Number.MAX_SAFE_INTEGER));
    console.log("Max = ", solve(arr, (a, b) => Math.max(a, b), Number.MIN_SAFE_INTEGER));
    console.log("Product = ", solve(arr, (a, b) => a * b, 1));
    console.log("Join = ", solve(arr, (a, b) => `${a}${b}`, ""));

    function solve(arr, operator, initial) {
        let result = initial;

        for (let element of arr) {
            result = operator(result, element)
        }
        return result;
    }
}
aggregates([2, 3, 10, 5]);
aggregates([5, -3, 20, 7, 0.5]);