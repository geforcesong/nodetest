function decompose(num) {
    var  sum = 0
    ,    exp = 0
    ,   base = 2
    , powers = []
    
    do {
      exp = Math.floor(Math.log(num - sum) / Math.log(base));
      if (exp < 2) break;
      
      powers.push(exp);
      sum += Math.pow(base++, exp);
    }
    while (sum < num);
  
    return [powers, num - sum];
    
  }

  console.log(decompose(9));