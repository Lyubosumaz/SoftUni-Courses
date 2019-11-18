function solve(arr) {

    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let data = arr[i].split(/\s+<->\s+/);
        let name = data[0];
        let population = Number(data[1]);

        if (!obj[name]) {
            Object.assign(obj, { [name]: 0 });
        }
        obj[name] += population;
    }
  
    for (key in obj) {
        console.log(`${key} : ${obj[key]}`);
    }
}

solve(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']);
solve(['Istanbul <-> 100000', 'Honk Kong <-> 2100004', 'Jerusalem <-> 2352344', 'Mexico City <-> 23401925', 'Istanbul <-> 1000']);