// Input: 1->2->3->4->5->NULL, m = 2, n = 4
// Output: 1->4->3->2->5->NULL
function ListNode(val) {
    this.val = val;
    this.next = null;
}


var reverseBetween = function (head, m, n) {
    let stack = [];
    let queue1 = [], queue2 = []
    let isFistPart = true;;
    let count = 1
    while (head) {
        if (count >= m && count <= n) {
            isFistPart = false;
            stack.push(head);
        } else if (isFistPart) {
            queue1.push(head);
        } else {
            queue2.push(head);
        }
        count++;
        head = head.next;
    }
    while (stack.length) {
        queue1.push(stack.pop());
    }
    queue1 = queue1.concat(queue2);
    let cHead = null, pre = null;
    if (!queue1 || !queue1.length) {
        return null;
    } else if (queue1.length === 1) {
        return queue1[0];
    } else {
        for (var i = 0; i < queue1.length; i++) {
            queue1[i].next = (i + 1 >= queue1.length ? null : queue1[i + 1]);
        }
        return queue1[0];
    }
};

let i = 1;
let head = null, p = null;
while (i <= 3) {
    if (!head) {
        head = new ListNode(i);
        p = head;
    } else {
        p.next = new ListNode(i);
        p = p.next
    }
    i++;
}

function disp(head) {
    while (head) {
        console.log(head.val);
        head = head.next;
    }
}

disp(head)


let h = reverseBetween(head, 1, 3);

disp(h)