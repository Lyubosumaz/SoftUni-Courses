(function (scope) {
    const { SIZES } = scope;

    class GameObjectFactory {
        constructor(width, height) {
            this.bounds = { width, height };
        }

        createPlayer() {
            const { width, height } = this.bounds;
            const { WIDTH, HEIGHT } = SIZES.PLAYER;
            const left = (width - WIDTH) / 2;
            const top = height - (HEIGHT / 1.4);
            const player = { left, top };

            return player;
        }

        createBullet(left, top) {
            const bullet = { left, top };
            return bullet;
        }

        createEnemy() {
            const { width } = this.bounds;
            const { WIDTH } = SIZES.ENEMY;
            const left = parseInt(Math.random() * (width - WIDTH));
            const top = 0;
            return {
                left,
                top,
            };
        }
    }

    scope.GameObjectFactory = GameObjectFactory;
}(window))