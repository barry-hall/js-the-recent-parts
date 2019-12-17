// copy and quokka some code from md files here.
var arr = [10,20,NaN,30,40,50];

console.log(arr.includes( 20 ));     //true
console.log(arr.includes( 60 ));     //false
console.log(arr.includes( 20, 3 ));  //false
console.log(arr.includes( 10, -2 )); //false
console.log(arr.includes( 40, -2 )); //true
console.log(arr.includes( NaN ));    //true


[1,2,3,4,5,6].flatMap(function doubleEvens(v) {
    if(v % 2 ==0) {
        return [v, v * 2];
    } else {
        return [];
    }
});


var numbers = {
    *[Symbol.iterator]({
        start = 0,
        end = 100,
        step = 1
    } = {}) {
        for(let i = start; i <= end; i+= step) {
            yield i;
        }
    }
};

// should print 0..100 by 1s
for (let num of numbers) {
    console.log(num);
}

// should print 6..30 by 4s
console.log(`My lucky numbers are:  ${
    [...numbers[Symbol.iterator]({
        start: 6,
        end: 30,
        step: 4
    })]
}`);