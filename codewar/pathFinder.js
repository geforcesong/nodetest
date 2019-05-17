

function pathFinder(maze) {
    let mazeArr = maze.split('\n').map(c => { return c.trim().split('') });
    let stack = [];
    if (mazeArr[0][0] === 'W') {
        return false;
    }
    stack.push({ x:0, y:0 });
    while (stack.length) {
        cur = stack.pop();
        if (cur.x === mazeArr.length - 1 && cur.y === mazeArr.length - 1) {
            return true;
        }
        mazeArr[cur.x][cur.y] = 'W';
        var down = { x: cur.x + 1, y: cur.y };
        var up = { x: cur.x - 1, y: cur.y };
        var left = { x: cur.x, y: cur.y - 1 };
        var right = { x: cur.x, y: cur.y + 1 };
        [down, up, left, right].forEach((c) => {
            if (mazeArr[c.x] && mazeArr[c.x][c.y] && mazeArr[c.x][c.y] !== 'W') {
                stack.push(c)
            }
        })
    }
    return false;
}



console.log(pathFinder(`.W.
.W.
W..`));

console.log(pathFinder(
    `......
    ......
    ......
    ......
    ......
    ......`));