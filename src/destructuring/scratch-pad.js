// copy and quokka some code from md files here.
var arr = [10,20,NaN,30,40,50];

console.log(arr.includes( 20 ));     //true
console.log(arr.includes( 60 ));     //false
console.log(arr.includes( 20, 3 ));  //false
console.log(arr.includes( 10, -2 )); //false
console.log(arr.includes( 40, -2 )); //true
console.log(arr.includes( NaN ));    //true
