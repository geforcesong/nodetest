var setZeroes = function (matrix) {
    let lines = [], cols = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (!matrix[i][j]) {
                if (!lines.includes(i)) {
                    lines.push(i);
                }
                if (!cols.includes(j)) {
                    cols.push(j);
                }
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (cols.includes(j) || lines.includes(i)) {
                matrix[i][j] = 0;
            }
        }
    }
};

let c = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
setZeroes(c);
console.log(c);