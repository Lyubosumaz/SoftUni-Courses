function solve(number) {
    number = number.toString();

    let allSame = true;
    let firstNum = number[0]
    let sum = Number(firstNum);

    for (let i = 1; i <= number.length - 1; i++) {
        sum += Number(number[i]);
        if (!(firstNum === number[i])) {
            allSame = false;
        }
    }
    console.log(allSame);
    console.log(sum);
}

solve(22222222)