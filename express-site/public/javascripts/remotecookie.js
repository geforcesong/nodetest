document.cookie = "remote_v=1";

setTimeout(() => {
    console.log();
    console.log('Read cookie from remote:');
    var cookie = document.cookie;
    console.log(cookie);
    console.log('Read cookie from remote Finished!!');
}, 3000);