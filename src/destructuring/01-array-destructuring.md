# Refactoring code using destructuring

Destructuring: decomposing a structure into its individual parts

## Array example

```js
// ARRY DESTRUCTURING
var tmp = getSomeRecords();

//destructuring: imperative
var first = tmp[0];
var second = tmp[1];

var firstName = first.name;
var firstEmail = first.email !== undefined ? first.email : "nobody@none.ltd";

var secondName = second.name;
var secondEmail = second.email !== undefined ? second.email : "nobody@none.ltd";

// destructuring: declarative
var [
    {
        name: firstName,
        email: firstEmail = "nobody@none.ltd"
    },
    {
        name: secondName,
        email: secondEmail = "nodoy@none.ltd"
    }
] = getSomeRecords();

console.log(firstEmail);

function getSomeRecords() {
    return [
        {
            "name": "John",
            "email": "hello@john.com"
        },
        {
            "name": "Jane",
            "email": "hello@jane.com"
        }
    ];
}
```

![refactoring-code-using-destructuring](./img/refactoring-code-using-destructuring.png)

## Conditionals

```js
function data() {
    return [1,2,3]
}

//imperative conditional
var tmp = data();
var three = tmp[2] !== undefined ? temp[2] : 10;

//declarative conditional
var [
    one,
    two,
    three = 10
] = data();
```

## Spread operator & declaring destructured arrays

If you need to access to the both the value and it's destructured parts, you chain an equals together.

```js
function data() {
    return [1,2,3];
}

var tmp;
var [
    one,
    two,
    three,
    ...four
] = tmp = data();
```

## Declaration & Assignment

![declaration-and-assignment](./img/declaration-and-assignment.png)

## Comma separation

![comma-seperation](./img/comma-seperation.png)

## Parameter arrays

```js
//with fallback to empty array
function data(tmp = []) {
    var [
        first,
        second,
        third
    ] = tmp
}

// or
function data([
    first,
    second,
    third
] = []) {
    // ..
}
```

Fallback to empty array;

![fallback-empty-array](./img/fallback-empty-array.png)

## Nested array destructuring

![nested-array](./img/nested-array.png)

With fallback:

![nested-array-fallback](./img/nested-array-fallback.png)
