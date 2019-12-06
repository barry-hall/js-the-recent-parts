# Array Methods

## find, findIndex, & includes

Array.find(..) //es6
Array.includes(..) //es2016

```js
var arr = [ { a: 1 }, { a: 2} ];

arr.find(function match(v)) {
    return v && v.a > 1;
});
// {a:2}

arr.find(function match(v) {
    return v && v.a > 10;
});
// undefined

arr.findIndex(function match(v) {
    return v && v.a > 10;
});
// -1
```

As of ES2016 we can call includes, which gives true / false for thing existing.

```js
var arr = [10,20,NaN,30,40,50];

arr.includes( 20 );     //true
arr.includes( 60 );     //false
arr.includes( 20, 3 );  //false
arr.includes( 10, -2 ); //false
arr.includes( 40, -2 ); //true
arr.includes( NaN );    //true

```

## flat & flatMap

...