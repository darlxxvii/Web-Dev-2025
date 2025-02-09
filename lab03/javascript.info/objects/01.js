//1 task
let user=new Object();
user.name='John';
user.surname="Smith";
user.name='Pete';
delete user.name;

//2 task
function isEmpty(obj) {
    for(let key in obj){
        return false;
    }
    return true;
}


let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

//3 task
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
function sum(obj){
    let s=0;
    for(let key in obj){
        s+=obj[key];
    }
    return s;
}

alert(sum(salaries));

//4 task
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
multiplyNumeric(menu);

function multiplyNumeric(obj){
    for(key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}