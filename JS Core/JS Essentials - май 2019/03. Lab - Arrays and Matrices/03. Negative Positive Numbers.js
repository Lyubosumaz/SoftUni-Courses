function solve(arr) {
    let outputArr = [];
    arr.forEach(element => {
        if (element < 0) {
            return outputArr.unshift(element);
        } else {
            return outputArr.push(element);
        }
    });
    console.log(outputArr.join('\n'));
}
solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);