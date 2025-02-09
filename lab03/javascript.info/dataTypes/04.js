function randomInteger(min, max) {
    let num = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(num);
  }
  
alert( randomInteger(1, 3) );