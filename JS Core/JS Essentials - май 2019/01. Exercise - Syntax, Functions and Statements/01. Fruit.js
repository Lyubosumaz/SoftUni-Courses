function buying(fruit, weight, price) {
    inKg = weight / 1000;
    buyPrice = inKg * price;
    console.log(`I need $${buyPrice.toFixed(2)} to buy ${inKg.toFixed(2)} kilograms ${fruit}.`);
}

buying('orange', 1563, 2.35);