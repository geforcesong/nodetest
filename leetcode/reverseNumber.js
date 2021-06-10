const num = 83457;

let ret = 0;
let tmp = num;
while(tmp){
    ret = ret *10 + tmp%10;
    tmp = Math.floor(tmp/10);
}

console.log(ret);