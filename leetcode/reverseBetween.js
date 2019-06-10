// Input: 1->2->3->4->5->NULL, m = 2, n = 4
// Output: 1->4->3->2->5->NULL
function ListNode(val) {
    this.val = val;
    this.next = null;
}


var reverseBetween = function (head, m, n) {
    
};

let i=1;
let head = null, p = null;
while(i<=2){
    if(!head){
        head = new ListNode(i);
        p = head;
    } else{
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

reverseBetween(head, 1,2);

disp(head)