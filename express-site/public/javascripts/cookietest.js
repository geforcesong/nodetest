document.cookie = "local_v=1";


setTimeout(() => {
    console.log();
    console.log('Read cookie from local:');
    var cookie = document.cookie;
    console.log(cookie);
    console.log('Read cookie from local Finished!!');
}, 3000);