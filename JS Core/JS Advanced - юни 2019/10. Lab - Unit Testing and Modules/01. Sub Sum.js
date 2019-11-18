function solve(arr, startIndex, endIndex) {
    if (!Array.isArray(arr)) {
        return NaN;
    }
    if (arr.length === 0) {
        return 0;
    }
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex >= arr.length)
        endIndex = arr.length - 1;

    let arrayOnlyNumbers = arr.map(Number);
    let result = arrayOnlyNumbers.splice(startIndex, endIndex + 1).reduce((a, b) => a + b);

    return result;
}

solve([10, 20, 30, 40, 50, 60], 3, 300);
solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);