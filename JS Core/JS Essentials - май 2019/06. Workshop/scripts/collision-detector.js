(function (scope) {
    class CollisionDetector {
        _checkForOverlapping(bullet, enemy) {
            const hasHorizontalCollision =
                (bullet.left <= enemy.left && enemy.left <= bullet.right) ||
                (bullet.left <= enemy.right && enemy.right <= bullet.right) ||
                (enemy.left <= bullet.left && bullet.left <= enemy.right) ||
                (enemy.left <= bullet.right && bullet.right <= enemy.right);

            const hasVerticalCollision =
                (bullet.top <= enemy.top && enemy.top <= bullet.bottom) ||
                (bullet.top <= enemy.bottom && enemy.bottom <= bullet.bottom) ||
                (enemy.top <= bullet.top && bullet.top <= enemy.bottom) ||
                (enemy.top <= bullet.bottom && bullet.bottom <= enemy.bottom);

            return hasHorizontalCollision && hasVerticalCollision;
        }

        // _getCollisionBox({ left, top, width, height }) {
        //     return {
        //         left,
        //         top,
        //         width,
        //         height,
        //     };
        // }

        onCollisionObjects(bullets, enemies) {
            if (bullets.length === 0) {
                return;
            }
            bullets.forEach(bullet => {
                // const bulletCollisionBox = this._getCollisionBox(bullet);
                enemies.forEach(enemy => {
                    // if (bullet.isDead || enemy.isDead) {
                    //     return;
                    // }
                    // const enemyCollisionBox = this._getCollisionBox(enemy);
                    const hasCollision = this._checkForOverlapping(bullet, enemy);
                    if (hasCollision) {
                        // func(bullet, enemy)
                        bullet.isDead = hasCollision;
                        enemy.isDead = hasCollision;
                    }
                });
            });
        }
    }

    scope.CollisionDetector = CollisionDetector;
}(window));