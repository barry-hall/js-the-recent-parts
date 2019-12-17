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

## flat & flatMap (ES2019)

Can be used to flatten an array.

```js
var nestedValues =
    [ 1, [2, 3], [[]], [4, [5] ], 6];

nestedValues.flat(0);
// [ 1, [2, 3], [[]], [4, [5] ], 6]

nestedValues.flat(/*defaut: 1*/);
// [ 1, 2, 3, [], 4, [ 5 ] , 6]

nestedValues.flat(2);
// [ 1, 2, 3, 4, 5, 6]

```

flatMap is popular with functional programming.

```js
[1,2,3].map(function tuples(v) {
    return [ v * 2. String (v * 2) ]
});
// [ [2, "2"], [4, "4"], [6, "6"] ]

[1,2,3].map(function tuples(v) {
    return [ v * 2. String (v * 2) ]
}).flat;
// [ 2, "2", 4, "4", 6, "6" ]

[1,2,3].flatMap(function all(v) {
    return [ v * 2. String (v * 2) ]
});
// [ 2, "2", 4, "4", 6, "6" ]
```

You can use flatMap to add or remove elements from an array.

```js
[1,2,3,4,5,6].flatMap(function doubleEvens(v) {
    if(v % 2 ==0) {
        return [v, v * 2];
    } else {
        return [];
    }
});
// [2, 4, 4, 8, 6, 12]
```
