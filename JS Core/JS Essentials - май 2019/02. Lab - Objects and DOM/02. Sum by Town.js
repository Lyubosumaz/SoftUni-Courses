function solve(arr) {

    let townsArr = [];

    let townsObj = {};

    for (let i = 0; i < arr.length; i += 2) {
        if (!townsObj[arr[i]]) {
            townsObj[arr[i]] = 0;
        }
        townsObj[arr[i]] += Number(arr[i + 1]);
    }
    console.log(JSON.stringify(townsObj));
}

solve(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);
solve(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'varna', '4']);