(function (scope) {
    const SIZES = {
        PLAYER: {
            HEIGHT: 160,
            WIDTH: 180,
            SPEED: 50,
            MAX_LEFT: -77,
            MAX_RIGHT: 95,
        },
        BULLET: {
            HEIGHT: 50,
            WIDTH: 35,
            SPEED: -2,
        },
        ENEMY: {
            HEIGHT: 100,
            WIDTH: 100,
            SPEED: 1,
        },
    };

    const KEY_CODES = {
        LEFT: 37,
        RIGHT: 39,
        FIRE: 32,
    };

    scope.SIZES = SIZES;
    scope.KEY_CODES = KEY_CODES;
}(window));