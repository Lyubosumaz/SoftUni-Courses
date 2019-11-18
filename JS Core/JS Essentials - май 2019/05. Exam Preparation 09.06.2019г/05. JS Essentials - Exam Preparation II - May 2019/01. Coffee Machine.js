function solve(arr) {
    const caffeine = 0.80;
    const decaf = 0.90;
    const tea = 0.80;

    let totalIncome = 0;

    for (let i = 0; i < arr.length; i++) {
        let splitArr = arr[i].split(", ");

        let coin = Number(splitArr[0]);
        let sum = 0;

        let typeOfDrink = splitArr[1];
        switch (typeOfDrink) {
            case "coffee":
                let typeOfCoffee = splitArr[2];
                if (typeOfCoffee === "caffeine") {
                    sum += caffeine;
                } else if (typeOfCoffee === "decaf") {
                    sum += decaf;
                }
                let milkOrSugar = splitArr[3];
                if (milkOrSugar === "milk") {
                    //TODO
                    sum += 0.10;
                    let sugar = Number(splitArr[4]);
                    if (sugar > 0) {
                        sum += 0.10;
                    }
                } else {
                    if (Number(milkOrSugar) > 0) {
                        sum += 0.10;
                    }
                }
                if ((coin-sum)>=0) {
                    console.log(`You ordered ${typeOfDrink}. Price: ${sum.toFixed(2)}$ Change: ${Math.abs(coin-sum).toFixed(2)}$`);
                    totalIncome += sum;
                } else {
                    console.log(`Not enough money for ${typeOfDrink}. Need ${Math.abs(coin-sum).toFixed(2)}$ more.`);
                }
                break;
            case "tea":
                sum += tea;
                let milkOrSugar2 = splitArr[2];
                if (milkOrSugar2 === "milk") {
                    //TODO
                    sum += 0.10;
                    let sugar2 = Number(splitArr[3]);
                    if (sugar2 > 0) {
                        sum += 0.10;
                    }
                } else {
                    if (Number(milkOrSugar2) > 0) {
                        sum += 0.10;
                    }
                }
                if ((coin-sum)>=0) {
                    console.log(`You ordered ${typeOfDrink}. Price: ${sum.toFixed(2)}$ Change: ${Math.abs(coin-sum).toFixed(2)}$`);
                    totalIncome += sum;
                } else {
                    console.log(`Not enough money for ${typeOfDrink}. Need ${Math.abs(coin-sum).toFixed(2)}$ more.`);
                }
                break;
        }
    }
    console.log(`Income Report: ${totalIncome.toFixed(2)}$`)
}

solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);
solve(['8.00, coffee, decaf, 4', '1.00, tea, 2']);