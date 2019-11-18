function solve(arr) {
    let timesToRotate = Number(arr.pop());
    for (let i = 1; i <= timesToRotate % arr.length; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    console.log(arr.join(' '));
}

solve(['1', '2', '3', '4', '2']);
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);