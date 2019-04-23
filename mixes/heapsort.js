function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function adjustHeap(arr, i, length) {
    let temp = arr[i]; // 当前父节点
    // j<length 的目的是对结点 i 以下的结点全部做顺序调整
    for (let j = 2 * i + 1; j < length; j = 2 * j + 1) {
        temp = arr[i];  // 将 arr[i] 取出，整个过程相当于找到 arr[i] 应处于的位置
        if (j + 1 < length && arr[j] < arr[j + 1]) {
            j++;   // 找到两个孩子中较大的一个，再与父节点比较
        }
        if (temp < arr[j]) {
            swap(arr, i, j) // 如果父节点小于子节点:交换；否则跳出
            i = j;  // 交换后，temp 的下标变为 j
        } else {
            break
        }
    }
}

// 堆排序
function heapSort(arr) {
    // 初始化大顶堆，从第一个非叶子结点开始
    for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
        adjustHeap(arr, i, arr.length);
    }
    // 排序，每一次for循环找出一个当前最大值，数组长度减一
    for (let i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i); // 根节点与最后一个节点交换
        adjustHeap(arr, 0, i); // 从根节点开始调整，并且最后一个结点已经为当
        // 前最大值，不需要再参与比较，所以第三个参数
        // 为 i，即比较到最后一个结点前一个即可
    }
}

var arr = [9, 60, 7, 80, 10];
heapSort(arr);
console.log(arr);