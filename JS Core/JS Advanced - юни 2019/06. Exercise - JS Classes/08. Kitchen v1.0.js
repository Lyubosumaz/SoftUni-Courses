class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = [];
        this.actionsHistory = [];
    }

    loadProducts(arrOfStrings) {
        for (let product of arrOfStrings) {
            let [productName, productQuantity, productPrice] = product.split(" ");
            let pattern = { [productName]: Number(productQuantity) };

            if (this.budget >= Number(productPrice)) {
                this.budget -= Number(productPrice);

                let check = false;
                for (let element of this.productsInStock) {
                    if (element.hasOwnProperty(productName)) {
                        check = true;
                        element[productName] += Number(productQuantity);
                    }
                }
                if (check === false) {
                    this.productsInStock.push(pattern);
                }
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }
        return this.actionsHistory.join("\n");
    }

    // meal => string | neededProducts => array of strings | price => number
    addToMenu(meal, neededProducts, price) {
        if (this.menu.hasOwnProperty(meal)) {
            return (`The ${meal} is already in our menu, try something different.`);    //return || print??
        } else {
            this.menu[meal] = [];
            this.menu[meal].push(price)
            this.menu[meal].push(neededProducts);
            return `Great idea! Now with the ${meal} we have ${this.numberOfMeals} meals in the menu, other ideas?`
        }
    }

    showTheMenu() {
        if (this.numberOfMeals === 0) {
            return (`Our menu is not ready yet, please come later...`);
        } else {
            let output = "";
            Object.entries(this.menu).forEach(([key, value]) => {
                output += `${key} - $ ${value[0]}\n`;
            });
            return output.trim(); //now it have trim;
        }
    }

    get numberOfMeals() {
        let counter = 0;
        for (let key in this.menu) {
            counter++
        }
        return counter;
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return (`There is not ${meal} yet in our menu, do you want to order something else?`); //return || print??
        } else {
            let price = this.menu[meal][0];
            let products = this.menu[meal][1];

            let arrOfTruth = [];            //are there all productName's
            let arrAreThereMaterials = [];  //is there enough neededQuantity

            for (let product of products) {
                let [productName, neededQuantity] = product.split(" ");

                for (let obj of this.productsInStock) {
                    if (obj.hasOwnProperty(productName)) {
                        arrOfTruth.push(true);

                        if (Object.values(obj) >= Number(neededQuantity)) {
                            arrAreThereMaterials.push(true);
                        }
                    }
                }
            }
            // console.log(this.productsInStock)
            // console.log(arrOfTruth, arrAreThereMaterials, products.length)
            // console.log(arrOfTruth.length === products.length && arrAreThereMaterials.length === products.length)
            if (arrOfTruth.length === products.length && arrAreThereMaterials.length === products.length) {
                for (let product of products) {
                    let [productName, neededQuantity] = product.split(" ");

                    for (let element of this.productsInStock) {
                        if (element.hasOwnProperty(productName)) {
                            element[productName] -= Number(neededQuantity);
                        }
                    }
                }
                this.budget += Number(price);
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`; //return || print??
            } else {
                return (`For the time being, we cannot complete your order (${meal}), we are very sorry...`) //return || print??
            }
        }
    }
}

// let kitchen = new Kitchen(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.showTheMenu());
// console.log(kitchen.makeTheOrder('frozenYogurt'));