function convert(line) {
    let regex = /[?,!]+|[.]+/g;
    cutStringArr = line.replace(regex, '').split(/\s+/g);
    
    console.log(cutStringArr.map(function (e) { return e.toUpperCase() }).join(', '));
}

convert('hold other functions.');