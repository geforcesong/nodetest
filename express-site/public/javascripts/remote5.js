document.cookie = "thrid_v=5;SameSite=Lax;";

setTimeout(() => {
    console.log();
    console.log('Read cookie from remote5:');
    var cookie = document.cookie;
    console.log(cookie);
    console.log('Read cookie from remote5 Finished!!');
}, 5000);