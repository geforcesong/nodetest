/*
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

function accum(s) {
    if(!s){
        return '';
    }
    const arr = s.split('');
    let narr = arr.reduce((prev, cur, index)=>{
        const up = cur.toUpperCase();
        const lp = cur.toLowerCase();
        prev.push(`${up}${lp.repeat(index)}`);
        return prev;
    },[])
    return narr.join('-');
}

console.log(accum('abcd'));