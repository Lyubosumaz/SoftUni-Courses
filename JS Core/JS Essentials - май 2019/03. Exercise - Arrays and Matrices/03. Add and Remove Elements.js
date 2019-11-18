function solve(arr) {
    let outputArray = [];
    let initialNum = 1;
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        switch (command) {
            case 'add':
                outputArray.push(initialNum++);
                break;
            case 'remove':
                let deleteLast = outputArray.pop();
                ++initialNum;
                break;
            default:
                break;
        }
    }
    if (outputArray.length === 0) {
        console.log('Empty');
    } else {
        console.log(outputArray.join('\n'));
    }
}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);