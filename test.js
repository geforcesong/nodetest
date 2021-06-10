(async _=>{
    await new Promise((a,b)=>(a(1)));
    await new Promise((a,b)=>(a(2)));
    return 3;
})().then(console.log)
.catch(console.log);