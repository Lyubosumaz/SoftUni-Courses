function solve(data) {
    let rects = [];
    for (let [width, height] of data) {
        let rect = comparator(width, height);
        rects.push(rect);
    }
    rects.sort((a, b) => a.compereTo(b));
    return rects;

    function comparator(width, height) {
        let rect = {
            width,
            height,
            area: () => rect.width * rect.height,
            compereTo: function (other) {
                let result = other.area() - rect.area();
                console.log(result)
                return result || (other.width - rect.width);
            }
        };
        return rect;
    }
}

// console.log(solve([[10, 5], [5, 12]]));
console.log(solve([[1, 20], [20, 1], [5, 3], [5, 3]]));

function getSortedRectangles(rectanglesArr) {
    let rectangles = [];
    for (let rectangleAsArr of rectanglesArr) {
        let rectangle = {
            width: Number(rectangleAsArr[0]),
            height: Number(rectangleAsArr[1]),
            area: function () {
                return this.width * this.height;
            },
            compareTo: function (otherRectangle) {
                if(this.area() === otherRectangle.area()){
                    return otherRectangle.width - this.width;
                }

                return otherRectangle.area() - this.area();
            }
        };

        rectangles.push(rectangle);
    }

    let sortedRectangles = rectangles.sort((a,b) => a.compareTo(b));
    return sortedRectangles;
}