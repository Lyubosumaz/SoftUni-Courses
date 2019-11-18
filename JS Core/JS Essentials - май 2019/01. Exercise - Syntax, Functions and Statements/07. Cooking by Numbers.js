function solve(arr) {
    let cookNumber = Number(arr[0]);
    let operations = '';

    for (let i = 1; i < arr.length; i++) {
        operations = arr[i];

        switch (operations) {
            case 'chop':
                cookNumber /= 2;
                break;
            case 'dice':
                cookNumber = Math.sqrt(cookNumber);
                break;
            case 'spice':
                cookNumber += 1;
                break;
            case 'bake':
                cookNumber *= 3;
                break;
            case 'fillet':
                cookNumber -= cookNumber * 0.20;
                break;
        }
        console.log(cookNumber);
    }
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);