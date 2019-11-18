function solve(arr, argument) {
    switch (argument) {
        case "asc":
            arr.sort((a, b) => a - b);
            break;
        case "desc":
            arr.sort((a, b) => b - a);
            break;
    }
    // console.log(arr)
    return arr;
}
solve([14, 7, 17, 6, 8], 'asc');
solve([14, 7, 17, 6, 8], 'desc');