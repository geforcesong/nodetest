var matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
]

var clockwiseRotate = function (matrix) {
  let n = matrix.length;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n - i; j++) {
      swap(i, j, n - 1 - j, n - 1 - i);
    }
    // console.log(matrix);
    // console.log('XXXXXXXX');
  }

  for (var i = 0; i < Math.floor(n / 2); i++) {
    for (var j = 0; j < n; j++) {
      swap(i, j, n - 1 - i, j);
    }
  }
};

var antiClockwiseRotate = function (matrix) {
  let n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; ++j) {
      swap(i, j, j, i);
    }
  }

  for (var i = 0; i < Math.floor(n / 2); i++) {
    for (var j = 0; j < n; j++) {
      swap(i, j, n - 1 - i, j);
    }
  }
};

function swap(i, j, i1, j1) {
  // console.log(`(${i}, ${j}) => (${i1},${j1})`);
  var c = matrix[i][j];
  matrix[i][j] = matrix[i1][j1];
  matrix[i1][j1] = c;
}

console.log('*********** Original ****************');
console.log(matrix);

console.log('*********** Clockwise ****************');
clockwiseRotate(matrix)
console.log(matrix);

antiClockwiseRotate(matrix);
console.log('************* Anti Clockwise **************');
console.log(matrix);

antiClockwiseRotate(matrix);
console.log('************* Anti Clockwise **************');
console.log(matrix);
