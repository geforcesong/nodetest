 
 Promise.prototype.finally1 = function(cb){
    return this.then(value => { cb(); return value }, err => { cb(); throw err})
 }

new Promise((resolve,reject)=>{
    return reject('sldfj')
    resolve('hello');
}).finally1(()=>{
    console.log(`Finallllll`);
})