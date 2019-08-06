class A{}

async function test(){
    return new Promise((resolve)=>{
        return null;
    });
}

// (async _=>{
    
// })()

test().then(c=>{
    c.then(d=>{
        console.log(d);
        console.log('dev');
        console.log('nono');
    })
})