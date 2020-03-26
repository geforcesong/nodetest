document.cookie = "remote_v=4;SameSite=Lax;";

setTimeout(() => {
    console.log();
    console.log('Read cookie from remote4:');
    var cookie = document.cookie;
    console.log(cookie);
    console.log('Read cookie from remote4 Finished!!');
}, 5000);