function solve(arr) {
    let ATM = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 2) {
            for (let j = 0; j < arr[i].length; j++) {
                ATM.push(arr[i][j]);
            }
            let insertCash = counterCash(arr[i])
            let ATMBalance = counterCash(ATM)
            console.log(`Service Report: ${insertCash}$ inserted. Current balance: ${ATMBalance}$.`);
        }
        if (arr[i].length === 2) {
            let ATMBalance = counterCash(ATM);
            let accountBalance = Number(arr[i][0]);
            let withdrawAmount = Number(arr[i][1]);

            if (accountBalance >= withdrawAmount && ATMBalance >= withdrawAmount) {
                let withdrawCut = moneyCuter(withdrawAmount);

                for (let i = 0; i < withdrawCut.length; i++) {
                    for (let j = 0; j < ATM.length; j++) {

                        if (withdrawCut[i] === ATM[j]) {
                            // let peronRemove = withdrawCut.indexOf(withdrawCut[i]);
                            // withdrawCut.splice(peronRemove, 1);
                            let machineRemove = ATM.indexOf(ATM[j]);
                            ATM.splice(machineRemove, 1);
                        }
                        break;
                    }
                }

                accountBalance -= withdrawAmount;
                console.log(`You get ${withdrawAmount}$. Account balance: ${accountBalance}$. Thank you!`)
            } else if (accountBalance < withdrawAmount) {
                console.log(`Not enough money in your account. Account balance: ${accountBalance}$.`)
            } else if (ATMBalance < withdrawAmount) {
                console.log(`ATM machine is out of order!`)
            }
        }
        if (arr[i].length === 1) {
            let banknote = Number(arr[i][0]);
            let counter = 0;

            for (let i = 0; i < ATM.length; i++) {
                if (banknote === ATM[i]) {
                    counter++;
                }
            }
            console.log(`Service Report: Banknotes from ${banknote}$: ${counter}.`)
        }
    }

    function counterCash(arrCommand) {
        let sumBalance = 0;
        for (let i = 0; i < arrCommand.length; i++) {
            sumBalance += arrCommand[i];
        }
        return sumBalance;
    }

    function moneyCuter(amount) {
        let resultBanknotes = [];
        // let stringAmount = amount.toString().split("").reverse();

        if (amount.toString().length === 1) {
            let units = amount % 10;
            resultBanknotes.push(amount);
        }
        if (amount.toString().length === 2) {
            let units = amount % 10;
            amount -= units;
            resultBanknotes.push(units);
            let tens = amount % 100;
            amount -= tens;
            resultBanknotes.push(tens);
        }
        if (amount.toString().length === 3) {
            let units = amount % 10;
            amount -= units;
            resultBanknotes.push(units);
            let tens = amount % 100;
            amount -= tens;
            resultBanknotes.push(tens);
            let hundreds = amount % 1000;
            amount -= hundreds;
            resultBanknotes.push(hundreds);
        }
        if (amount.toString().length === 4) {
            let units = amount % 10;
            amount -= units;
            resultBanknotes.push(units);
            let tens = amount % 100;
            amount -= tens;
            resultBanknotes.push(tens);
            let hundreds = amount % 1000;
            amount -= hundreds;
            resultBanknotes.push(hundreds);
            let thousands = amount % 10000;
            amount -= thousands;
            resultBanknotes.push(thousands);
        }
        return resultBanknotes.reverse();
    }

}

solve([
    [20, 5, 100, 20, 1],
    [457, 25],
    [1],
    [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
    [20, 85],
    [5000, 4500],]);
