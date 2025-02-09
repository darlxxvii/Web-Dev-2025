let c = {};
function A() { return c; }
function B() { return c }

let a = new A();
let b = new B();

alert( a == b ); // true