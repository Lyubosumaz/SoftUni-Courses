(function (scope) {
    class Renderer {
        constructor(canvas, bounds) {
            this.ctx = canvas.getContext("2d");
            this.bounds = bounds;
            this._preloadImage("playerImage", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhpgS-FvFO0dJ3WoYpQQt7JVfnRz2dC7Eedqdtll8PV_n89HWY");
            this._preloadImage("bulletImage", "https://medias.pylones.com/9387-thickbox_default/pen-rocket-pen.jpg");
            this._preloadImage("enemyImage", "https://upload.wikimedia.org/wikipedia/commons/1/1b/Humpback_anglerfish.png");
        }

        _preloadImage(propName, src) {
            const image = new Image();
            image.src = src;
            image.onload = () => {
                this[propName] = image;
            };
        }

        clear() {
            const { ctx } = this;
            const { width, height } = this.bounds;
            ctx.clearRect(0, 0, width, height)
        }

        renderPlayer(player) {
            const { left, top, direction } = player;
            const { ctx } = this;
            const { WIDTH, HEIGHT } = SIZES.PLAYER;
            if (this.playerImage) {
                if (direction === "left") {
                    ctx.save();
                    ctx.translate(left, top);
                    ctx.rotate(5 * Math.PI / 180);
                    ctx.scale(1, 1);
                    ctx.translate(-left, -top);
                } else if (direction === "right") {
                    ctx.save();
                    ctx.translate(left, top);
                    ctx.rotate(-5 * Math.PI / 180);
                    ctx.scale(1, 1);
                    ctx.translate(-left, -top);
                }
                ctx.drawImage(this.playerImage, left, top, WIDTH, HEIGHT);

                if (direction) {
                    ctx.restore();
                }
            }
        }

        renderBullets(bullets) {
            bullets.forEach(bullet => this.renderBullet(bullet));
        }

        renderBullet(bullet) {
            const { left, top } = bullet;
            const { ctx } = this;
            const { WIDTH, HEIGHT } = SIZES.BULLET;
            if (this.bulletImage) {
                ctx.drawImage(this.bulletImage, left, top, WIDTH, HEIGHT);
            }
        }

        renderEnemies(enemies) {
            enemies.forEach(enemy => this.renderEnemy(enemy));
        }

        renderEnemy(enemy) {
            const { left, top } = enemy;
            const { ctx } = this;
            const { WIDTH, HEIGHT } = SIZES.ENEMY;
            if (this.enemyImage) {
                ctx.drawImage(this.enemyImage, left, top, WIDTH, HEIGHT);
            }
        }
    };

    scope.Renderer = Renderer;
}(window));