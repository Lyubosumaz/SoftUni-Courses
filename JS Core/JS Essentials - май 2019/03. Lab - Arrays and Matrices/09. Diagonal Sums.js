function solve(arr) {
    let mainDiagonal = 0;
    let lesserDiagonal = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 1; j++) {
            mainDiagonal += Number(arr[i][j + i]);
            // let currentArr = arr[i];
            lesserDiagonal += Number(arr[i][arr[i].length - 1 - i]);
        }
    }
    let output = [mainDiagonal, lesserDiagonal];
    console.log(output.join(' '));
}

solve([
    [20, 40],
    [10, 60]]);

solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);