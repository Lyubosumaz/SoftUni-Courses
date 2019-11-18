function solve(array, number) {
    // function numberOfGolemsCutArr(arr, num) {
    //     let resultArray = [];
    //     let size = 0;
    //     let len = arr.length;
    //     if (num < 2) {
    //         resultArray = arr;

    //         return resultArray;
    //     }
    //     if (num === 2) {
    //         size = len / 2;
    //         firstCut = arr.slice(0, size);
    //         resultArray.push(firstCut);
    //         secondCut = arr.slice(size, len);
    //         resultArray.push(secondCut);

    //         return resultArray;
    //     }
    //     if (num > 2) {
    //         //TODO
    //     }
    // }
    // plasmaArrCut = numberOfGolemsCutArr(array, number);

    //cut in two ---
    let firstCut = array.slice(0, array.length / 2);
    let firstGolemCutSize = [];

    let secondCut = array.slice(array.length / 2, array.length);
    let secondGolemCutSize = [];

    //cut these two by number ---
    if (firstCut.length === secondCut.length) {
        while (firstCut.length > 0 && secondCut.length > 0) {
            firstGolemCutSize.push(firstCut.slice(0, number));
            firstCut = firstCut.slice(number);

            secondGolemCutSize.push(secondCut.slice(0, number));
            secondCut = secondCut.slice(number);
        }
    } else {
        //TODO is firstCut.length !== secondCut.length
    }

    //multiply the cut to arrays by number ---
    let firstGolem = [];
    for (let i = 0; i < firstGolemCutSize.length; i++) {
        let result = 1;
        for (let j = 0; j < firstGolemCutSize[i].length; j++) {
            result *= Number(firstGolemCutSize[i][j]);
        }
        firstGolem.push(result);
    }
    let secondGolem = [];
    for (let i = 0; i < secondGolemCutSize.length; i++) {
        result = 1;
        for (let j = 0; j < secondGolemCutSize[i].length; j++) {
            result *= Number(secondGolemCutSize[i][j]);
        }
        secondGolem.push(result);
    }

    //sum of the first & second golem ---
    let firstSum = 0;
    for (let i = 0; i < firstGolem.length; i++) {
        firstSum += firstGolem[i];
    }
    let secondSum = 0;
    for (let i = 0; i < secondGolem.length; i++) {
        secondSum += secondGolem[i];
    }
 
    //fight
    let smallestNumber = Number.MAX_VALUE;
    for (let i = 0; i < array.length; i++) {
        if (smallestNumber > array[i]) {
            smallestNumber = array[i];
        }
    }
    let biggestNumber = Number.MIN_VALUE;
    for (let i = 0; i < array.length; i++) {
        if (biggestNumber < array[i]) {
            biggestNumber = array[i];
        }
    }

    let round = 1;
    while (firstSum >= biggestNumber && secondSum >= biggestNumber) {
        firstSum -= smallestNumber;
        secondSum -= smallestNumber;
        round++;
    }
    
    if (firstSum > secondSum) {
        //first win
        console.log(`First Giant defeated Second Giant with result ${firstSum} - ${secondSum} in ${round} rounds`)
    } else if (firstSum < secondSum) {
        //second win
        console.log(`Second Giant defeated First Giant with result ${secondSum} - ${firstSum} in ${round} rounds`)
    } else if (firstSum === secondSum) {
        //draw
        console.log(`Its a draw ${smallestNumber} - ${smallestNumber}`)
    }
}

solve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3)
solve([3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2)
solve([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 2)