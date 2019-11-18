
function coffeeStorage() {
    let arr = JSON.parse(document.getElementsByTagName("textarea")[0].value);

    let report = "";
    if (arr.includes("REPORT")) {
        report = arr[arr.indexOf("REPORT")];
        let removeReport = arr.splice(arr.indexOf("REPORT"), 1);
    }
    let inspection = "";
    if (arr.includes("INSPECTION")) {
        inspection = arr[arr.indexOf("INSPECTION")];
        let removeInspection = arr.splice(arr.indexOf("INSPECTION"), 1);
    }


    let warehouse = {};

    for (let i = 0; i < arr.length; i++) {
        let splitArray = arr[i].split(", ");

        let command = splitArray[0];
        let brand = splitArray[1];    //key
        let coffee = splitArray[2];
        let date = splitArray[3];
        let quantity = splitArray[4];
        switch (command) {
            case "IN":
                let pattern = { coffee, date, quantity };
                if (!warehouse[brand]) {
                    warehouse[brand] = new Array();
                }
                // vendors.filter(vendor => (vendor.Name === "Magenic"));

                // console.log(warehouse[brand].filter( element=>(element.coffee === coffee)))
                // if(warehouse[brand].coffee === coffee){
                //     if(warehouse[brand].){

                //     }
                // }
                // warehouse[brand].coffee.date ===  warehouse[brand].coffee.date
                // Object.entries(warehouse).
                warehouse[brand].push(pattern);
                console.log(warehouse[brand].includes(coffee) )
                console.log(Object.entries(warehouse))


                // new Date(warehouse[brand].date) a - b
                break;

            case "OUT":

                break;
        }
    }
    console.log(warehouse)
    console.log(report)
    console.log(inspection)
}