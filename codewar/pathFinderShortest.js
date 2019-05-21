const INF = 100;
const mazeMatrix = [
    ['#', 'S', '#', '#', '#', '#', '#', '#', 'o', '#'],
    ['o', 'o', 'o', 'o', 'o', 'o', '#', 'o', 'o', '#'],
    ['o', '#', 'o', '#', '#', 'o', '#', '#', 'o', '#'],
    ['o', '#', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['#', '#', 'o', '#', '#', 'o', '#', '#', '#', '#'],
    ['o', 'o', 'o', 'o', '#', 'o', 'o', 'o', 'o', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', 'o', '#'],
    ['o', 'o', 'o', '#', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', '#', '#', '#', '#', 'o', '#', '#', '#', 'o'],
    ['o', 'o', 'o', 'o', '#', 'o', 'o', 'o', 'G', '#']
];

let distance =[];
const N = M = mazeMatrix.length;
for(var i=0;i< N;i++){
    let line = [];
    for(var j=0;j<M;j++){
        line.push ( INF);
    }
    distance.push(line);
}

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

// display(distance);
let xs =0, ys =1, xe=9, ye =8;
const xd = [1, 0, -1, 0];
const yd = [0, 1, 0, -1];
function bfs(){
    let queue =[];
    queue.push({x:xs, y:ys});
    distance[xs][ys] = 0;
    while(queue.length > 0){
        let point = queue.shift();
        if(point.x === xe && point.y === ye){
            break;
        }
        console.log(`current is: ${point.x}, ${point.y}`);
        for(var i=0;i<4;i++){
            var xp = point.x + xd[i];
            var yp = point.y + yd[i];
            if(0<=xp && xp<N && 0<=yp && yp<M && mazeMatrix[xp][yp] != '#' && distance[xp][yp] == INF){
                queue.push({x:xp, y:yp});
                distance[xp][yp] = distance[point.x][point.y] + 1;  
            }
        }
        display(distance);
    }
    return distance[xe][ye];
}

var c = bfs();
console.log(c);