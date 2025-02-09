function unique(arr) {
    let res = [];
    for (let s of arr) {
      if (!res.includes(s)) {
        res.push(s);
      }
    }
  
    return res;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); //Hare, Krishna, :-O