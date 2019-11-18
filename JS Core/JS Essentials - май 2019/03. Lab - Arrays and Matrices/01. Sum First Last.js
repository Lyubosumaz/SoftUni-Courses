function solve(arr) {
    // console.log(Number(arr[0]) + Number(arr[arr.length - 1]));

    let a = Number(arr.shift());
    let b = Number(arr.pop());
    console.log(a + b);
    // console.log(arr);
}
solve(['20', '30', '40']);
solve(['5', '10']);