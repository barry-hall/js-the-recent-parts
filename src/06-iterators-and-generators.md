# Iterators & Generators

## Iterators

Strings and arrays are an example of objects that can be iterated over.
They are "iterables".

```js
var str = "Hello";
var world = ["W","o","r","l","d"];

var it1 = str[Symbol.iterator]();
var it2 = world[Symbol.iterator]();

it1.next();     // { vlaue: "H", done: false }
it1.next();     // { vlaue: "e", done: false }
it1.next();     // { vlaue: "l", done: false }
it1.next();     // { vlaue: "l", done: false }
it1.next();     // { vlaue: "o", done: false }
it1.next();     // { vlaue: undefined, done: true }

it2.next();     // { value: "W", done: false }
//..

```

If you wanted to loop programatically, you could do something like...

```js
// this is awful, see for of below.
var str = "Hello";

for (
    let it = str[Symbox.iterator](), v, result;
    (result = it.next()) && !result.done &&
        (v = result.value || true);
) {
    console.log(v);
}
// "H" "e" "l" "l" "o"
```

## Declarative Iterators

**Fortunately you can use the for of construct!**

```js
// notice how we can iterate over the string or call the iterator directly.
var str = "Hello";
var it = str[Symbol.iterator]();

for (let v of it) {
    console.log(v);
}
// "H" "e" "l" "l" "o"

for (let v of str) {
    console.log(v);
}
// "H" "e" "l" "l" "o"

// the spread operator is an example of an interator from ES6...
var str = "Hello";

var letters = [...str];
letters;
// ["H","e","l","l","o"]

```

## Data Structure without Iterators

For data structures that don't have an iterator, you need to write one. For example, `object` does not have an iterator.

```js
// imperative iterator
var obj = {
    a: 1,
    b: 2,
    c: 3,
    [Symbol.iterator]: function() {
        var keys = Object.keys(this);
        var index = 0;
        return {
            next: () =>
                (index < keys.length) ?
                { done: false, value: this[keys[index++]]} :
                {done: true, value: undefined}
        };
    }
};

[...obj];
```

## Generators
