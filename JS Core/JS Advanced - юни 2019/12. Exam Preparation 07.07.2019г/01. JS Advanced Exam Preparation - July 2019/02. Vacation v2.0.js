//My
class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        if (this.budget > budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }

        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
        }

        for (let students of this.kids[grade]) {
            let kidName = students.split("-")[0]
            if (kidName === name) {
                return `${name} is already in the list for this ${this.destination} vacation.`;
            }
        }

        let pattern = `${name}-${budget}`;
        this.kids[grade].push(pattern);
        return this.kids[grade];
    }

    removeChild(name, grade) {
        if (!this.kids.hasOwnProperty(grade)) {
            return `We couldn't find ${name} in ${grade} grade.`
        }

        let index = -1;
        for (let students of this.kids[grade]) {
            let kidName = students.split("-")[0];
            index++;
            if (kidName === name) {
                this.kids[grade].splice(index, 1);
                return this.kids[grade];
            }
        }

        return `We couldn't find ${name} in ${grade} grade.`
    }

    toString() {
        if (this.numberOfChildren === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }

        let output = `${this.organizer} will take ${numberOfChildren} children on trip to ${this.destination}\n`;
        this.kids = this.kids.sort((a, b) => {
            return Number(Object.keys(a)) - Number(Object.keys(b));
        });

        for (let key in this.kids) {
            output += `Grade: ${key}\n`
            let number = 1;
            for (let student of this.kids[key]) {
                output += `${number++}. ${student}\n`
            }
        }

        return output;
    }

    get numberOfChildren() {
        let counter = 0;
        for (let grade in this.kids) {
            counter += this.kids[grade].length;
        }

        return counter;
    }
}

// let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);
// vacation.registerChild('Gosho', 5, 3000);
// vacation.registerChild('Lilly', 6, 1500);
// vacation.registerChild('Pesho', 7, 4000);
// vacation.registerChild('Tanya', 5, 5000);
// vacation.registerChild('Mitko', 10, 5500)
// console.log(vacation.toString());