function quickSort(arr) {
    if (!arr || arr.length <= 1) {
        return arr;
    }
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr.splice(pivotIndex, 1)[0];
    const left = [], right = [];
    for (let item of arr) {
        if (item < pivot) {
            left.push(item);
        } else {
            right.push(item);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}

let arr = [85, 24, 63, 45, 17, 31, 96, 50];

console.log(quickSort(arr));