# Refactoring code using destructuring

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
