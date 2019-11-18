//My broken code - judge 22/100
class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kidsList = {};
    }

    registerChild(kidName, kidGrade, kidBudget) {
        if (kidBudget >= this.budget) {
            if (!this.kidsList.hasOwnProperty(kidGrade)) {
                this.kidsList[kidGrade] = [];
                // let addingPattern = `${kidName}-${kidBudget}`;
                // this.kidsList[kidGrade].push(`${kidName}-${kidBudget}`);
                // let test = { name: kidName, budget: kidBudget };

                this.kidsList[kidGrade].push({ [kidName]: kidBudget });
                return this.kidsList[kidGrade].map(element => `${Object.keys(element)}-${Object.values(element)}`);
            } else {
                // for (let grade of this.kidsList[kidGrade]) {
                //     if (grade.split("-")[0] === kidName) {
                //     }
                // }
                // let checkArr = this.kidsList[kidGrade].map(element => element.split("-")[0]);
                let isThere = true;
                for (let test of this.kidsList[kidGrade]) {
                    if (Object.keys(test).includes(kidName)) {
                        isThere = false;
                    }
                }
                // if (this.kidsList[kidGrade] !== kidName) {
                if (isThere) {
                    // this.kidsList[kidGrade].push(`${kidName}-${kidBudget}`);
                    this.kidsList[kidGrade].push({ [kidName]: kidBudget });
                    return this.kidsList[kidGrade].map(element => `${Object.keys(element)}-${Object.values(element)}`);
                } else {
                    return `${kidName} is already in the list for this ${this.destination} vacation.`;
                }
            }
        } else {
            return `${kidName}'s money is not enough to go on vacation to ${this.destination}.`;
        }
    }

    removeChild(kidName, kidGrade) {
        if (this.kidsList.hasOwnProperty(kidGrade)) {
            for (let student of this.kidsList[kidGrade]) {
                if (Object.keys(student).includes(kidName)) {
                    let index = this.kidsList[kidGrade].indexOf(student)
                    this.kidsList[kidGrade].splice(index, 1);
                    return this.kidsList[kidGrade].map(element => `${Object.keys(element)}-${Object.values(element)}`);
                } else {
                    return `We couldn't find ${kidName} in ${kidGrade} grade.`
                }
            }
        } else {
            return `We couldn't find ${kidName} in ${kidGrade} grade.`
        }
    }

    toString() {
        if (this.numberOfChildren === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }
        for (const key in this.kidsList) {
            this.kidsList[key] = this.kidsList[key].sort((a, b) => {
                return Number(Object.values(a)) - Number(Object.values(b));
            });
        }

        let output = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;
        for (const grade in this.kidsList) {
            output += `Grade: ${grade}\n`;
            let counter = 1;
            for (let test of this.kidsList[grade]) {
                output += `${counter++}. ${Object.keys(test)}-${Object.values(test)}\n`
            }
            output += `\n`;
        }
        return output;
    }

    get numberOfChildren() {
        let counter = 0;
        for (let kvp in this.kidsList) {
            for (let kids of this.kidsList[kvp]) {
                if (kids !== "") {
                    counter++;
                }
            }
        }
        return counter;
    }
}

//Test 1
// let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('Lilly', 6, 2100));
// console.log(vacation.registerChild('Pesho', 6, 2400));
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('Tanya', 5, 6000));
// console.log(vacation.registerChild('Mitko', 10, 1590));


//Test 2
// let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
// vacation.registerChild('Gosho', 5, 2000);
// vacation.registerChild('Lilly', 6, 2100);
// console.log(vacation.removeChild('Gosho', 9));
// vacation.registerChild('Pesho', 6, 2400);
// vacation.registerChild('Gosho', 5, 2000);
// console.log(vacation.removeChild('Lilly', 6));
// console.log(vacation.registerChild('Tanya', 5, 6000))


//Test 3
// let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);
// vacation.registerChild('Gosho', 5, 3000);
// vacation.registerChild('Lilly', 6, 1500);
// vacation.registerChild('Pesho', 7, 4000);
// vacation.registerChild('Tanya', 5, 5000);
// vacation.registerChild('Mitko', 10, 5500)
// console.log(vacation.toString());


// Test 4
// let vacation = new Vacation('Miss. Elizabeth', 'The bahamas', 400);
// vacation.registerChild('Gosho', 12, 3400);
// vacation.registerChild('Pesho', 12, 400);
// vacation.registerChild('Pesho', 12, 400);
// vacation.registerChild('Skaro', 11, 400);
// vacation.registerChild('Gosho', 11, 3444);
// console.log(vacation.toString());