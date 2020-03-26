document.cookie = "remote_v=2";
document.cookie = "remote_None=3;SameSite=None; Secure;";
document.cookie = "remote_Strict=4;SameSite=Strict;";
document.cookie = "remote_Lex=5;SameSite=Lex;";

setTimeout(() => {
    console.log();
    console.log('Read cookie from remote:');
    var cookie = document.cookie;
    console.log(cookie);
    console.log('Read cookie from remote Finished!!');
}, 5000);