function aggregate(arr) {
    let total = 0;
    let agg = 0;
    let concat;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
        agg += 1 / arr[i];
    }
    console.log(total);
    console.log(agg);
    console.log(concat = arr.join(''));
}

aggregate([2, 4, 8, 16])