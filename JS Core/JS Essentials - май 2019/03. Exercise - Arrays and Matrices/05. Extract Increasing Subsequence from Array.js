function solve(array) {
    let newArray = [array[0],];

    let previousElement = array[0];
    for (let i = 1; i <= array.length; i++) {
        let currentElement = array[i];
        if (previousElement < currentElement) {
            newArray.push(currentElement);
            previousElement = currentElement;
        }
    }
    console.log(newArray.join('\n'));
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 1]);