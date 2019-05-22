function display(arr){
    arr.forEach(element => {
        var c = '';
        element.forEach(k=>{
            c+=k.toString().padStart(4, ' ');
        });
        console.log(c);
    });
    console.log();
}

function pathFinder(maze) {
    let mazeArr = maze.split('\n').map(c => { return c.trim().split('') });
    let queue = [];
    if (mazeArr[0][0] === 'W') {
        return false;
    }
    let pathMap = [];
    mazeArr.forEach(line=>{
        var mapLine = [];
        line.forEach(cell=>{
            mapLine.push(100);
        });
        pathMap.push(mapLine);
    });
    // display(pathMap);
    queue.push({ x:0, y:0 });
    pathMap[0][0] = 0;
    while (queue.length) {
        cur = queue.shift();
        if (cur.x === mazeArr.length - 1 && cur.y === mazeArr.length - 1) {
            return pathMap[mazeArr.length - 1][mazeArr.length - 1];
        }
        mazeArr[cur.x][cur.y] = 'W';
        var down = { x: cur.x + 1, y: cur.y };
        var up = { x: cur.x - 1, y: cur.y };
        var left = { x: cur.x, y: cur.y - 1 };
        var right = { x: cur.x, y: cur.y + 1 };
        [down, up, left, right].forEach((c) => {
            if (mazeArr[c.x] && mazeArr[c.x][c.y] && mazeArr[c.x][c.y] !== 'W' && pathMap[c.x][c.y] === 100) {
                queue.push(c)
                pathMap[c.x][c.y] = pathMap[cur.x][cur.y] + 1
            }
        });
        // display(pathMap);
    }
    return false;
}



// console.log(pathFinder(`.W.
// .W.
// W..`));

console.log(pathFinder(
    `......
    ......
    ......
    ......
    ......
    ......`));