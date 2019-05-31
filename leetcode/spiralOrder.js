var spiralOrder = function (matrix) {
    if (!matrix || !matrix.length) {
        return null;
    }
    if (matrix.length === 1) {
        return matrix[0];
    }
    let res = [];
    let total = matrix[0].length * matrix.length;
    let testMatrix = matrix.map(e=>[...e]);
    while (res.length < total && testMatrix.length) {
        var tmp = right(testMatrix);
        res = res.concat(tmp);
        tmp = down(testMatrix);
        res = res.concat(tmp);
        tmp = left(testMatrix);
        res = res.concat(tmp);
        tmp = up(testMatrix);
        res = res.concat(tmp);
    }
    return res;
};

function right(matrix) {
    if(!matrix || !matrix.length){
        return [];
    }
    return matrix.shift();
}

function down(matrix) {
    if(!matrix || !matrix.length){
        return [];
    }
    return matrix.map(c => c.pop());
}

function left(matrix) {
    if(!matrix || !matrix.length){
        return [];
    }
    let t = matrix.pop();
    return t.reverse();
}

function up(matrix) {
    if(!matrix || !matrix.length){
        return [];
    }
    return matrix.map(c => c.shift());
}

var data = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];



var spiralOrder1 = function(matrix) {
    if (!matrix.length || !matrix[0].length) {
      return [];
    }
    const m = matrix.length;
    const n = matrix[0].length;
    const output = [];
    let [top, right, bottom, left] = [0, n - 1, m - 1, 0];
    while (top <= bottom && left <= right) {
      for (let i = left; i <= right; i++) {
        output.push(matrix[top][i]);
      }
      top += 1;
      if (!isValid(top, right, bottom, left)) break;
  
      for (let i = top; i <= bottom; i++) {
        output.push(matrix[i][right]);
      }
      right -= 1;
      if (!isValid(top, right, bottom, left)) break;
  
      for (let i = right; i >= left; i--) {
        output.push(matrix[bottom][i]);
      }
      bottom -= 1;
      if (!isValid(top, right, bottom, left)) break;
  
      for (let i = bottom; i >= top; i--) {
        output.push(matrix[i][left]);
      }
      left += 1;
      if (!isValid(top, right, bottom, left)) break;
    }
    return output;
  };
  
  function isValid(top, right, bottom, left) {
    if (left > right || top > bottom) {
      return false;
    }
    return true;
  }

console.log(data);

console.log(spiralOrder(data));
console.log(spiralOrder1(data));