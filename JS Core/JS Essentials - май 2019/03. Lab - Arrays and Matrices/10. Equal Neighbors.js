function solve(matrix) {
    let count = 0;

    for (let i = 1; i < matrix.length; i++) {
        let previousArr = matrix[i - 1];
        let currentArr = matrix[i];

        for (let j = 0; j < previousArr.length; j++) {
            if (previousArr[j] === currentArr[j] || previousArr[j] === previousArr[j + 1]) {
                count++;
            }
        }
    }
    console.log(count);
}
solve([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']]);

solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]);

solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]);
