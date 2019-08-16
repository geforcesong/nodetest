(async _ => {
    console.log('hello world')
    const c = await CallService();
    alert('finish' + c);
})();


async function CallService() {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve(300);
        }, 3000);
    })
}

class Hello {
    static world() {
        console.log('Hello, World!');
        console.log(MyData);
        console.log(process.env.NODE_ENV);
        console.log(MyObject);
    }
}
Hello.world();