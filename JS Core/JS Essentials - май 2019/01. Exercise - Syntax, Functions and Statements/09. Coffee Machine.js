function order(arr) {
    const caffeine = 0.80;
    const decaf = 0.90;
    const tea = 0.80;

    let totalIncome = 0;

    for (let i = 0; i < arr.length; i++) {
        let cutArray = arr[i].split(', ');

        let moneyInserted = Number(cutArray[0]);
        let moneyNeeded = 0;
        switch (cutArray[1]) {
            case "coffee":
                switch (cutArray[2]) {
                    case "caffeine":
                        moneyNeeded += caffeine;
                        if (cutArray[3] === "milk") {
                            moneyNeeded += 0.1;
                            if (Number(cutArray[4]) !== 0) {
                                moneyNeeded += 0.1;
                            }
                        } else {
                            if (Number(cutArray[3]) !== 0) {
                                moneyNeeded += 0.1;
                            }
                        }
                        break;
                    case "decaf":
                        moneyNeeded += decaf;
                        if (cutArray[3] === "milk") {
                            moneyNeeded += 0.1;
                            if (Number(cutArray[4]) !== 0) {
                                moneyNeeded += 0.1;
                            }
                        } else {
                            if (Number(cutArray[3]) !== 0) {
                                moneyNeeded += 0.1;
                            }
                        }
                        break;
                }
                break;
            case "tea":
                moneyNeeded += tea;
                if (cutArray[2] === "milk") {
                    moneyNeeded += 0.1;
                    if (Number(cutArray[3]) !== 0) {
                        moneyNeeded += 0.1;
                    }
                } else {
                    if (Number(cutArray[2]) !== 0) {
                        moneyNeeded += 0.1;
                    }
                }
                break;
        }
        let change = moneyInserted - moneyNeeded;
        if (change < 0) {
            console.log(`Not enough money for ${cutArray[1]}. Need $${Math.abs(change).toFixed(2)} more.`);
        } else {
            totalIncome += moneyNeeded;
            console.log(`You ordered ${cutArray[1]}. Price: $${moneyNeeded.toFixed(2)} Change: $${Math.abs(change).toFixed(2)}`);
        }
    }
    console.log(`Income Report: $${totalIncome.toFixed(2)}`)
}

order(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);
order(['8.00, coffee, decaf, 4', '1.00, tea, 2']);