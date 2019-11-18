function solve(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i].sort((a, b) => {
            return b - a;
        });
        for (let j = 0; j < arr[i].length; j++) {
            output.push(arr[i][j]);
            // console.log(arr[i][j]);
        }
    }
    output.sort((a, b) => {
        return b - a;
    });
    console.log(output[0]);
}

solve([[20, 50, 10],
[8, 33, 145]]);

solve([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]);