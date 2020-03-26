document.cookie = "local_v=1";
document.cookie = "local_None=2;SameSite=None; Secure;";
document.cookie = "local_Strict=2;SameSite=Strict;";
document.cookie = "local_Lex=2;SameSite=Lex;";


setTimeout(() => {
    console.log();
    console.log('Read cookie from local:');
    var cookie = document.cookie;
    console.log(cookie);
    console.log('Read cookie from local Finished!!');
}, 5000);