function solve(numberSteps, footprintLength, studentSpeed) {
    let distanceKm = (numberSteps * footprintLength) / 1000;

    let restTime = 0;
    if (distanceKm >= 0.5) {
        restTime = parseInt(distanceKm / 0.5);
    }
    let totalSecounds = ((distanceKm / studentSpeed) * 3600) + (restTime * 60);

    let houersWalked = parseInt(totalSecounds / 3600);
    totalSecounds -= houersWalked * 3600;
    let minutesWalked = parseInt(totalSecounds / 60);
    let secoundsWalked = totalSecounds % 60;

    let finalOutput = '';
    if (houersWalked < 10) {
        finalOutput += `0${houersWalked}`;
    } else {
        finalOutput += `${houersWalked}`;
    }
    if (minutesWalked < 10) {
        finalOutput += `:0${minutesWalked}:`;
    } else {
        finalOutput += `:${minutesWalked}:`;
    }
    if (secoundsWalked < 10) {
        finalOutput += `0${secoundsWalked.toFixed(0)}`;
    } else {
        finalOutput += `${secoundsWalked.toFixed(0)}`;
    }
    console.log(finalOutput);
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);