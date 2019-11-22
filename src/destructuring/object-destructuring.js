function data() {
    return { a: 1, b: 2, c: 3, d: 4 };
}

var tmp = data();
var first = tmp.a;
var second = tmp.b;
var third = tmp.c;

var {
    b: second,
    a: first,
    ...third
 } = data();

 console.log(third);
 