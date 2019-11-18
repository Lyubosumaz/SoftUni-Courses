function solve(inputObj) {
    let clientCar = {
        model: String,
        engine: Object,
        carriage: Object,
        wheels: Array,
    };

    findCorrectEngine = function () {
        // let result = [];
        // const engineObj = {
        //     SMALL: { power: 90, volume: 1800 },
        //     NORMAL: { power: 120, volume: 2400 },
        //     MONSTER: { power: 200, volume: 3500 },
        // };

        // let small = Math.max(inputObj.power, engineObj.SMALL.power) - Math.min(inputObj.power, engineObj.SMALL.power);
        // result.push(small);
        // let normal = Math.max(inputObj.power, engineObj.NORMAL.power) - Math.min(inputObj.power, engineObj.NORMAL.power);
        // result.push(normal);
        // let monster = Math.max(inputObj.power, engineObj.MONSTER.power) - Math.min(inputObj.power, engineObj.MONSTER.power);
        // result.push(monster);

        // result = result.sort((a, b) => {
        //     return a - b;
        // }).shift();
        // if (result === small) {
        //     return engineObj.SMALL;
        // } else if (result === normal) {
        //     return engineObj.NORMAL;
        // } else if (result === MONSTER) {
        //     return engineObj.MONSTER;
        // }
        let engineObj = {
            power: 0,
            volume: 0,
        };
        if (inputObj.power <= 90) {
            engineObj.power = 90;
            engineObj.volume = 1800;
        } else if (inputObj.power <= 120) {
            engineObj.power = 120;
            engineObj.volume = 2400;
        } else {
            engineObj.power = 200;
            engineObj.volume = 3500;
        }
        return engineObj
    }
    // console.log(findCorrectEngine())

    setCarriageAndColor = function () {
        const carriageObj = {
            HATCHBACK: { type: 'hatchback', color: "" },
            COUPE: { type: 'coupe', color: "" },
        };
        let result = { type: inputObj.carriage, color: inputObj.color }
        return result;
    }
    // console.log(setCarriageAndColor())

    setTiers = function () {
        result = [];
        if (inputObj.wheelsize % 2 === 0) {
            let rims = Math.floor(inputObj.wheelsize);
            if (rims % 2 === 0) {
                rims -= 1;
                result = [rims, rims, rims, rims]
                return result;
            } else {
                result = [rims, rims, rims, rims]
                return result;
            }

        } else {
            result = [inputObj.wheelsize, inputObj.wheelsize, inputObj.wheelsize, inputObj.wheelsize]
            return result;
        }
    }
    // console.log(setTiers())
    clientCar.model = inputObj.model;
    clientCar.engine = findCorrectEngine();
    clientCar.carriage = setCarriageAndColor();
    clientCar.wheels = setTiers();

    // console.log(clientCar)
    return clientCar;
}

solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});
solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});