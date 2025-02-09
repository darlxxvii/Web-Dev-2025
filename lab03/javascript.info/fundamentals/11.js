alert( null || 2 || undefined ); //2
alert( alert(1) || 2 || alert(3) ); // 1 which returns undefined then 2
alert( 1 && null && 2 ); //null
alert( alert(1) && alert(2) );// 1 and undefined cause 1 doesn't return anything
alert( null || 2 && 3 || 4 ); //3 bcz && performs first, then after null we have 3 and it stops

age=11;
if(age>=14 &&age<=90){
    alert("yes")
} else{
    alert('No')
}

if(!(age>=14 &&age<=90)){
    alert("yes")
} else{
    alert('No')
}
 
if(age<14 && age>90){
    lert("yes")
} else{
    alert('No')
}

if (-1 || 0) alert( 'first' ); //runs
if (-1 && 0) alert( 'second' ); //doesn't run
if (null || -1 && 1) alert( 'third' ); //runs