function solve(arr) {
    let knum = arr.shift();

    // let output = '';

    // let times = Math.ceil(arr.length / knum);
    // for (let k = 0; k < times; k++) {
    //     for (let i = 0 + k; i < knum + k; i++) {
    //         output += arr[i] + ' ';
    //     }
    //     output += '\n';
    // }
    // console.log(output);

    console.log(arr.slice(0, knum).join(' '));
    console.log(arr.slice(knum * -1).join(' '));
}
solve([2, 7, 8, 9]);
solve([3, 6, 7, 8, 9]); 