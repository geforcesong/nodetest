function isInteresting(number, awesomePhrases) {
    if(checking(number, awesomePhrases)){
        return 2;
    }

    for(var i=1;i<3;i++){
        if(checking(number+i, awesomePhrases) === 2){
            return 1;
        }
    }
    return 0;
}

function checking(number, awesomePhrases){
    if (number < 100) {
        return 0;
    }
    let isInterestingNum = 0;
    if (/^\d{1}0+$/.test(number.toString())) {
        return 2
    }
    const numStr = number.toString();
    if (!numStr.split('').filter(c => { return c !== (number % 10).toString() }).length) {
        return 2;
    }

    if('1234567890'.indexOf(number) >= 0){
        return 2;
    }

    if('9876543210'.indexOf(number) >= 0){
        return 2;
    }

    var i = 0, j = numStr.length - 1;
    while (numStr[i] === numStr[j] && i < j) {
        i++;
        j--;
    }
    if (i >= j) {
        return 2;
    }

    if(awesomePhrases.includes(number)){
        return 2;
    }
    return 0;
}

console.log(isInteresting(7540, [1337, 256]));