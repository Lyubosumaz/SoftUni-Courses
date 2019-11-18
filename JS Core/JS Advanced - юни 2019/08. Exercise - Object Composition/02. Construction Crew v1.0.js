function worker(obj) {
    workerParams = {
        weight: Number,
        experience: Number,
        levelOfHydrated: Number,
        dizziness: Boolean,
    }
    workerParams.weight = obj.weight;
    workerParams.experience = obj.experience;
    if (obj.dizziness === true) {
        let water = (obj.experience * 0.1) * obj.weight;
        workerParams.levelOfHydrated = water + obj.levelOfHydrated;
        workerParams.dizziness = false;
    } else {
        workerParams.levelOfHydrated = obj.levelOfHydrated;
        workerParams.dizziness = obj.dizziness;
    }

    return workerParams;
}

worker({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
});
worker({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
});