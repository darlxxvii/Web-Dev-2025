function sumInput() {
    let nums = [];
  
    while (true) {
      let val = prompt("Imput some number: ");
  
      if (val === "" || val === null || !isFinite(val)) break;
  
      nums.push(+val);
    }
  
    let sum = 0;
    for (let num of nums) {
      sum += num;
    }
    return sum;
  }
  
alert( sumInput() );