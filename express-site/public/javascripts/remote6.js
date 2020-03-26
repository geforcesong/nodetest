console.log(1);
document.cookie = "thrid_v=5;SameSite=Lax;";
console.log(2);
document.cookie = "thrid_v1=6;";
console.log(3);
document.cookie = "thrid_v2=7;SameSite=Strict;";
console.log(4);
document.cookie = "thrid_v3=8;SameSite=None; Secure;";



setTimeout(() => {
    console.log();
    console.log('Read cookie from remote5:');
    var cookie = document.cookie;
    console.log(cookie);
    console.log('Read cookie from remote5 Finished!!');
}, 5000);