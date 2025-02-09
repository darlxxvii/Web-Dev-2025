let calculator = {
    read(){
        this.a = +prompt("Input a:");
        this.b = +prompt("Input b:");
    },
    sum(){
        return this.a+this.b;
    },
    mul(){
        return this.a * this.b;
    }
};
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );