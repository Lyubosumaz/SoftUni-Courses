function orbit(inputArray) {
    let width = Number(inputArray[0]);
    let height = Number(inputArray[1]);
    let x = Number(inputArray[2]);
    let y = Number(inputArray[3]);

    let matrix = [];
    //(x -> [row]),(y -> [col])
    for (let row = 0; row < height; row++) {
        matrix[row] = [];
        for (let col = 0; col < width; col++) {
            matrix[row][col] = Math.max(Math.abs(x - row), Math.abs(y - col)) + 1;
        }
    }
    console.log(matrix.map(e => e.join(' ')).join('\n'));
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);