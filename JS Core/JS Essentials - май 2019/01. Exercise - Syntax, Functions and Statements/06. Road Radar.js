function speedingSolve(arr) {
    let speed = Number(arr[0]);
    let place = arr[1].toString();

    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;

    switch (place) {
        case 'residential':
            if ((speed - residentialLimit) > 0 && (speed - residentialLimit) <= 20) {
                console.log("speeding");
            } else if ((speed - residentialLimit) > 20 && (speed - residentialLimit) <= 40) {
                console.log("excessive speeding");
            } else if ((speed - residentialLimit) > 40) {
                console.log("reckless driving");
            }
            break;
        case 'city':
            if ((speed - cityLimit) > 0 && (speed - cityLimit) <= 20) {
                console.log("speeding");
            } else if ((speed - cityLimit) > 20 && (speed - cityLimit) <= 40) {
                console.log("excessive speeding");
            } else if ((speed - cityLimit) > 40) {
                console.log("reckless driving");
            }
            break;
        case 'interstate':
            if ((speed - interstateLimit) > 0 && (speed - interstateLimit) <= 20) {
                console.log("speeding");
            } else if ((speed - interstateLimit) > 20 && (speed - interstateLimit) <= 40) {
                console.log("excessive speeding");
            } else if ((speed - interstateLimit) > 40) {
                console.log("reckless driving");
            }
            break;
        case 'motorway':
            if ((speed - motorwayLimit) > 0 && (speed - motorwayLimit) <= 20) {
                console.log("speeding");
            } else if ((speed - motorwayLimit) > 20 && (speed - motorwayLimit) <= 40) {
                console.log("excessive speeding");
            } else if ((speed - motorwayLimit) > 40) {
                console.log("reckless driving");
            }
            break;
    }
}

speedingSolve([40, 'city'])
speedingSolve([21, 'residential'])
speedingSolve([120, 'interstate'])
speedingSolve([200, 'motorway'])