function worker(object) {
    if (object.dizziness) {
        let water = object.weight * object.experience * 0.1;
        object.levelOfHydrated += water;
        object.dizziness = false;
    }
    return object;
}

console.log(worker({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));
console.log(worker({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}));