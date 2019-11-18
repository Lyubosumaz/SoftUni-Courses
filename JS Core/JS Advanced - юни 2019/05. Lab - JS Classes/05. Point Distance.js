class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    static distance(pointA, pointB) {
        // Point.prototype.getX = function () {
        //     return this._x;
        // };
        // Point.prototype.setX = function (x) {
        //     this._x = x;
        // };
        // Point.prototype.getY = function () {
        //     return this._y;
        // };
        // Point.prototype.setY = function (y) {
        //     this._y = y;
        // }
        return Math.sqrt(Math.pow(pointA._x - pointB._x, 2) + Math.pow(pointA._y - pointB._y, 2));
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
p2.
console.log(Point.distance(p1, p2));