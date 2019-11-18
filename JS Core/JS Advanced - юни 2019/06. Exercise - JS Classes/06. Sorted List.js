class List {
    constructor() {
        this.arr = [];
        this.size = 0;
    }

    order() {
        return this.arr = this.arr.sort((a, b) => {
            return a - b;
        });
    }

    add(element) {
        let elIsNum = Number(element);
        this.arr.push(elIsNum);
        this.order();
        this.size = this.arr.length;
    }

    remove(index) {
        if (index >= 0 && index <= this.arr.length) {
            this.arr.splice(index, 1);
            this.size = this.arr.length;
        } else {
            //nothing or throw err
        }
    }

    get(index) {
        if (index >= 0 && index <= this.arr.length) {
            return this.arr[index]
        } else {
            //nothing or throw err
        }
    }
}

let list = new List();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1));
// list.remove(1);
// console.log(list.get(1));
list.add(9);
list.add(8);
list.add(7);
console.log(list.get(0))
console.log(list.get(1))
console.log(list.get(2))
console.log(list.size)