(function () {
    return {
        add: (vec1, vec2) => {
            let result = [];
            result.push(vec1[0] + vec2[0]);
            result.push(vec1[1] + vec2[1]);
            return result;
        },
        multiply: (vec1, scalar) => {
            let result = [];
            result.push(vec1[0] * scalar);
            result.push(vec1[1] * scalar);
            return result;
        },
        length: (vec1) => {
            return Math.sqrt(Math.pow(vec1[0], 2) + Math.pow(vec1[1], 2));
        },
        dot: (vec1, vec2) => {
            return (vec1[0] * vec2[0]) + (vec1[1] * vec2[1]);
        },
        cross: (vec1, vec2) => {
            return (vec1[0] * vec2[1]) - (vec2[0] * vec1[1]);
        }
    }
})()