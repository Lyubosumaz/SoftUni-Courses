function solve(array) {
    let allSumNumbers = [];
    let allSumNumbers2 = [];
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let arrLine = array[i];
        for (let j = 0; j < arrLine.length; j++) {
            let currentNum = arrLine[j];
            sum += currentNum;
        }
        allSumNumbers.push(sum);
        sum = 0;
    }
    let sum2 = 0;
    let sum3 = 0;
    for (let i = 0; i < array.length; i++) {
        let arrLine = array[i];
        sum += arrLine[0];
        sum2 += arrLine[1];
        sum3 += arrLine[2];
    }
    let oneNumber = allSumNumbers[0];
    let checker = true;
    for (let i = 0; i < array.length; i++) {
        if (oneNumber !== allSumNumbers[i] && oneNumber !== allSumNumbers2[i]) {
            checker = false;
        }
    }
    console.log(checker);
}
solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);
solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);
solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);