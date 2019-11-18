() => {

    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    return function (input) {

        let output = "";
    
        function error(str) {
            output = `Error: not enough ${str} in stock`
        }
        function prepare(q, protein, carbohydrate, fat, flavour) {
            let [pr, c, ft, fl] = [0, 0, 0, 0];

            if (protein > 0) {
                if (protein * q > storage.protein) return error("protein");
                pr = q * protein;
            }
            if (carbohydrate > 0) {
                if (carbohydrate * q > storage.carbohydrate) return error("carbohydrate");
                c = q * carbohydrate;
            }
            if (fat > 0) {
                if (fat * q > storage.fat) return error("fat");
                ft = q * fat;
            }
            if (flavour > 0) {
                if (flavour * q > storage.flavour) return error("flavour");
                fl = q * flavour;
            }
            storage.protein -= pr;
            storage.carbohydrate -= c;
            storage.fat -= ft;
            storage.flavour -= fl;
            output = "Success";
        }
        let recipes = {
            apple: (q) => prepare(q, 0, 1, 0, 2),
            lemonade: (q) => prepare(q, 0, 10, 0, 20),
            burger: (q) => prepare(q, 0, 5, 7, 3),
            eggs: (q) => prepare(q, 5, 0, 1, 1),
            turkey: (q) => prepare(q, 10, 10, 10, 10),
        }

        let args = input.split(" ");

        if (args[0] === "restock") {
            let microelement = args[1];
            let quantity = Number(args[2]);
            storage[microelement] += quantity;
            return "Success";
        } else if (args[0] === "prepare") {
            let recipe = args[1];
            let quantity = Number(args[2]);
            recipes[recipe](quantity);
            return output;
        } else if (args[0] === "report") {
            return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
        }
    }
}