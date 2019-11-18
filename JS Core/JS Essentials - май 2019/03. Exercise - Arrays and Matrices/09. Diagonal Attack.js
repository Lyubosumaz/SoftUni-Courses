function solve(arrayOfStrings) {
    let numberMatrix = arrayOfStrings.map((element) => {
        return element.split(" ");
    });
    for (let i = 0; i < arrayOfStrings.length; i++) {
        numberMatrix[i] = numberMatrix[i].map(Number);
    }
    let sumMainDiagonal = 0;
    let sumLesserDiagonal = 0;

    for (let i = 0; i < numberMatrix.length; i++) {
        sumMainDiagonal += numberMatrix[i][i];
        sumLesserDiagonal += numberMatrix[i][numberMatrix.length - 1 - i];
    }
    if (sumMainDiagonal === sumLesserDiagonal) {
        for (let row = 0; row < numberMatrix.length; row++) {
            // let main = numberMatrix[row][row]
            // let lesser = numberMatrix[row][numberMatrix.length - 1 - row]
            for (let col = 0; col < numberMatrix.length; col++) {
                if (row !== col && (row + col) !== numberMatrix.length - 1) {
                    numberMatrix[row][col] = sumMainDiagonal;
                }
            }
        }
        numberMatrix.forEach(x => console.log(x.join(' ')));
    } else {
        numberMatrix.forEach(x => console.log(x.join(' ')));
    }
}

solve([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);
solve([
    '1 1 1',
    '1 1 1',
    '1 1 0']);