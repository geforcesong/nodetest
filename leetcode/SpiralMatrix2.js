var generateMatrix = function (n) {
    let max = n ** 2;
    let arr = new Array(n);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(n);
    }

    let top = 0, left = 0, bottom = n - 1, right = n - 1;
    let num = 1;
    while (num <= max) {
        for (let i = left; i <= right; i++) {
            arr[top][i] = num++;
        }
        top++;
        if (!isValid(top, right, bottom, left)) break;

        for (let i = top; i <= bottom; i++) {
            arr[i][right] = num++;
        }
        right--;
        if (!isValid(top, right, bottom, left)) break;
        for (let i = right; i >= left; i--) {
            arr[bottom][i] = num++;
        }
        bottom--;
        if (!isValid(top, right, bottom, left)) break;
        for (let i = bottom; i >= top; i--) {
            arr[i][left] = num++;
        }
        left++;
        if (!isValid(top, right, bottom, left)) break;
    }
    return arr;
};

function isValid(top, right, bottom, left) {
    if (left > right || top > bottom) {
        return false;
    }
    return true;
}

console.log(generateMatrix(5));