(function (scope) {
    const { Renderer,
        GameObjectFactory,
        SIZES,
        KEY_CODES,
        CollisionDetector,
    } = scope;

    const setupCanvas = function (gameContainer, width, height) {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        gameContainer.appendChild(canvas);
        return canvas
    };

    const randomizeTrue = (chance) => {
        const value = Math.random() * 100;
        return value <= chance;
    }

    class EventChecker {
        isLeftEvent(ev) {
            const { LEFT } = KEY_CODES;
            return ev.keyCode === LEFT;
        }

        isRightEvent(ev) {
            const { RIGHT } = KEY_CODES;
            return ev.keyCode === RIGHT;
        }

        isFireEvent(ev) {
            const { FIRE } = KEY_CODES;
            return ev.keyCode === FIRE;
        }
    };

    class Game {
        constructor(selector, width, height) {
            this.gameContainer = document.querySelector(selector);
            this.canvas = setupCanvas(this.gameContainer, width, height);

            this.bounds = {
                width,
                height,
            }
            this.renderer = new Renderer(this.canvas, this.bounds);
            this.gameObjectFactory = new GameObjectFactory(width, height);
            this.eventChecker = new EventChecker();
            this.collisionDetector = new CollisionDetector();
            this.player = this.gameObjectFactory.createPlayer();
            this.bullets = [];
            this.enemies = [];
            this._attachGameEvents();

            return this;
        }

        _render() {
            this.renderer.renderPlayer(this.player);
            this.renderer.renderBullets(this.bullets);
            this.renderer.renderEnemies(this.enemies);
        }

        _updatePositions() {
            const { SPEED: bulletSpeed } = SIZES.BULLET;
            const { SPEED: enemySpeed } = SIZES.ENEMY;
            const { height } = this.bounds
            this.bullets.forEach(bullet => {
                bullet.top += bulletSpeed;
                bullet.isDead = bullet.top <= 0;
            });

            this.enemies.forEach(enemy => {
                enemy.top += enemySpeed;
                enemy.isDead = enemy.top >= height;
            });
        }



        _createNewGameObjects() {
            if (randomizeTrue(0.2)) {
                const enemy = this.gameObjectFactory.createEnemy();
                this.enemies.push(enemy)
            }
        }

        _checkForBulletWithEnemyCollision() {
            const { bullets, enemies } = this;
            const bulletsAndSize = [...bullets].map(({ left, top }) => ({
                left,
                top,
                right: left + SIZES.BULLET.WIDTH,
                bottom: top + SIZES.BULLET.HEIGHT,
            }));

            const enemiesAndSize = [...enemies].map(({ left, top }) => ({
                left,
                top,
                right: left + SIZES.ENEMY.WIDTH,
                bottom: top + SIZES.ENEMY.HEIGHT,
            }));

            this.collisionDetector.onCollisionObjects(bulletsAndSize, enemiesAndSize);
            this.bullets = bulletsAndSize;
            this.enemies = enemiesAndSize;
        }

        _checkForCollisions() {
            this._checkForBulletWithEnemyCollision();
            //player-enemy
        }

        _removeDeadGameObjects() {
            this.bullets = this.bullets.filter(bullet => !bullet.isDead);
            this.enemies = this.enemies.filter(enemy => !enemy.isDead);
        }

        _gameLoop() {
            this.renderer.clear();
            this._render();
            this._updatePositions();
            this._createNewGameObjects();
            this._checkForCollisions();
            this._removeDeadGameObjects();
            window.requestAnimationFrame(() => {
                this._gameLoop();
            });
        }

        start() {
            this._gameLoop();
        }

        _attachGameEvents() {
            window.addEventListener("keydown", (ev) => {
                this._handleMovementEvent(ev);
                this._handleFireEvent(ev);
            });
            window.addEventListener("keyup", (ev) => {
                this.player.direction = null;
            });
        }

        _handleMovementEvent(ev) {
            const { SPEED, MAX_LEFT, MAX_RIGHT } = SIZES.PLAYER;
            let alpha = 0;

            if (this.eventChecker.isLeftEvent(ev)) {
                alpha = -1;
                this.player.direction = "left";
            } else if (this.eventChecker.isRightEvent(ev)) {
                alpha = +1;
                this.player.direction = "right";
            }

            this.player.left += alpha * SPEED;
            this.player.left = Math.max(this.player.left, MAX_LEFT);
            this.player.left = Math.min(this.player.left, this.bounds.width - MAX_RIGHT);
        }

        _handleFireEvent(ev) {
            if (!this.eventChecker.isFireEvent(ev)) {
                return;
            }
            const { left, top } = this.player;
            const middleProjectile = left + (SIZES.PLAYER.WIDTH / 2.66); //BULLET LV1
            const bullet = this.gameObjectFactory.createBullet(middleProjectile, top);
            this.bullets.push(bullet);
        }
    };

    scope.Game = Game;
}(window));