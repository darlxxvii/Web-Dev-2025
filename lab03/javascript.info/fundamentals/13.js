/*let i = 3;*/

while (i) {
  alert( i-- );
} //1 because after alerting it becomes 0 and stops

let i = 0;
while (++i < 5) alert( i ); //1 2 3 4 

while (i++ < 5) alert( i ); //1 2 3 4 5

for (let i = 0; i < 5; i++) alert( i ); //0 1 2 3 4 
for (let i = 0; i < 5; ++i) alert( i ); //0 1 2 3 4

for(let i=2; i<=10; i++){
    if(i%2==0){
        alert(i)
    }
}

while(i<3){
    alert( `number ${i}!` );
    i++;
}