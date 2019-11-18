function calcLenght(string1, string2, string3) {
    let sumLenght;
    let averageLenght;

    let firstArgumentLenght = string1.length;
    let secondArgumentLenght = string2.length;
    let thirdArgumentLenght = string3.length;

    sumLenght = firstArgumentLenght + secondArgumentLenght + thirdArgumentLenght;
    averageLenght = Math.floor(sumLenght / 3);

    console.log(sumLenght);
    console.log(averageLenght);
}

calcLenght('chocolate', 'ice cream', 'cake');