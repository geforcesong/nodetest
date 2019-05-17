/*
Consider a sequence u where u is defined as follows:

The number u(0) = 1 is the first one in u.
For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
There are no other numbers in u.
Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

var list = ["foo", "bar"];
list.splice( 1, 0, "baz"); 
*/
function dblLinear(n) {
    let arr = [1];
    // your code
    let cur = 0;
    while (!arr[n] || (arr[n] > arr[cur]*2+1)) {
        var x = arr[cur];
        var y = 2 * x + 1;
        var z = 3 * x + 1;
        insert(arr, y);
        insert(arr, z);
        cur++;
    }
    return arr[n]
}

function insert(arr, m) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (m > arr[i]) {
            arr.splice( i+1, 0, m);
            break;
        } else if (m == arr[i]) {
            return;
        }
    }
}

console.log(dblLinear(10));