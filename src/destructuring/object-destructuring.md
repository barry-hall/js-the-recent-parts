# Object Destructuring

```js
function data() {
    return { a: 1, b: 2, c: 3 };
}

//old
var tmp = data();
var first = tmp.a;
var second = tmp.b;
var third = tmp.c;

// destructured
var {
    a: first,
    b: second,
    c: third
 } = data();

```
