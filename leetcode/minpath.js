var minPathSum = function (grid) {
    if (!grid || !grid.length) return 0;
    let arr = new Array(grid.length);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(grid[0].length);
    }

    let Q = [];
    let i = 0, j = 0;
    Q.push({
        i,
        j
    });
    arr[i][j] = grid[i][j];
    while (Q.length) {
        c = Q.shift();
        i = c.i;
        j = c.j;
        [[1,0],[0,1]].forEach(d=>{
            let ci = i+d[0];
            let cj = j+d[1];
            if(ci<grid.length && cj<grid[0].length){
                Q.push({
                    i: ci,
                    j: cj
                });
                if(arr[ci][cj] === undefined){
                    arr[ci][cj] = grid[ci][cj] ;
                    grid[ci][cj] = grid[i][j] + grid[ci][cj];
                } else{
                    if(arr[ci][cj] + grid[i][j] < grid[ci][cj]){
                        grid[ci][cj] = arr[ci][cj] + grid[i][j];
                    }
                }
            }
        });
    }
    return grid[grid.length-1][grid[0].length-1];
};

// minPathSum(
//     [
//         [1, 3, 1],
//         [1, 5, 1],
//         [4, 2, 1]
//     ]);


var minPathSum1 = function (grid) {
    if (!grid || !grid.length) return 0;
    const m = grid.length;
    const n = grid[0].length;

    for (var i = 0; i < m; ++i)
        for (var j = 0; j < n; ++j) {
            if (i == 0 && j == 0) continue;
            if (i == 0) 
                grid[i][j] += grid[i][j - 1];
            else if (j == 0)
                grid[i][j] += grid[i - 1][j];
            else
                grid[i][j] += Math.min(grid[i][j - 1], grid[i - 1][j]);
        }

    return grid[m - 1][n - 1];
};

var c = minPathSum([
    [1,1,1,1,1],
    [3,3,4,5,1],
    [5,4,3,2,1],
    [2,2,3,4,1],
    [2,3,2,3,1]
]);
console.log(c);