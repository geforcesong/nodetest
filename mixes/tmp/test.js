var result = "unknown";
try{
    throw new Error('hello error');
}catch(e){
    console.log(e.toString());
}