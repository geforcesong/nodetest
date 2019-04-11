function duplicateEncode(word){
    // ...
    if(!word || !word.length){
      return '';
    }
    word = word.toUpperCase();

    let newwords = new Array(word.length);
    
    for(var i=0;i<word.length;i++){
        if( [')','('].includes(newwords[i])){
            continue;
        }
        let indexes = [i];
        for(var j=i+1;j<word.length;j++){
            if(word[j] == word[i]){
                indexes.push(j);
            }
        }
        for(var id of indexes){
            newwords[id] = indexes.length>1 ? ')':'(';
        }
    }

    return newwords.join('');
}

console.log(duplicateEncode('din'));
console.log(duplicateEncode('recede'));
console.log(duplicateEncode('Success'));
console.log(duplicateEncode('(( @'));