function scalar(v1, v2) {
    var sum = 0;
    if (v1.length != v2.length) {
        return 'Not scalar';
    } else {
        for (var i = 0; i < v1.length; i++) {
            sum += v1[i] * v2[i];
        }
        return sum;
    }
}

function dot_product(v1, v2) {
    return (scalar(v1, v2) === 0 ? 'orthogonal' : 'Not orthogonal');
}

console.log(dot_product([12, 13, 6, 10], [13, 10, 16, 15]));