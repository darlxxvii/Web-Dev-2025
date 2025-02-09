function Calculator() {

    this.read = function() {
      this.a = +prompt('input for a:', 0);
      this.b = +prompt('input for b:', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }
  
let calculator = new Calculator();
calculator.read();

alert( "Sum = " + calculator.sum() );
alert( "Mul = " + calculator.mul() );