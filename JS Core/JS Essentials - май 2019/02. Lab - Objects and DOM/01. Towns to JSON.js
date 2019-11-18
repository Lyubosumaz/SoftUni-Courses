function coordinates(arr) {
    let listArr = [];

    for (let i = 1; i < arr.length; i++) {
        let cutArr = arr[i].split(/\s*\|\s*/);
        let listObj = {
            Town: cutArr[1],
            Latitude: Number(cutArr[2]),
            Longitude: Number(cutArr[3])
        };
        listArr.push(listObj);
    }
    console.log(JSON.stringify(listArr));
}

coordinates(['| Town | Latitude | Longitude |', '| Sofia | 42.696552 | 23.32601 |', '| Beijing | 39.913818 | 116.363625 |'])
coordinates(['| Town | Latitude | Longitude |', '| Veliko Turnovo | 43.0757 | 25.6172 |', '| Monatevideo | 34.50 | 56.11 |'])