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
// iterators: imperative iterator
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
                { done: false, value: this[keys[index++]] } :
                { done: true, value: undefined }
        };
    }
};

[...obj];
// [1,2,3]
```

## Generators

There are a lot of complexities to generators, but when you invoke a generator, they don't run, they produce an iterator.

```js
function  *main() { // the asterisk means this is a generator
    yield 1;
    yield 2;
    yield 3;
    return 4;
}
var it = main();

it.next();      // {value: 1, done: false}
it.next();      // {value: 2, done: false}
it.next();      // {value: 3, done: false}
it.next();      // {value: 4, done: true}

[...main()];
// [1,2,3]
```

It is important to understand that what you want to "return" you yeild. Once you hit the return that's the end of the iterator and in the above example you would be throwing away the value 4. It's bad practice to return a value from a generator.

```js
// iterators: declarative iterator

var obj = {
    a: 1,
    b: 2,
    c: 3,
    *[Symbol.iterator]() {
        for(let key of Object.keys(this)) {
            yield this[key]
        }
    }
};

[...obj];
// [1,2,3]
```

Exercise

```js
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
console.log(`My lucky numbers are: ${
    [...numbers[Symbox.iterator]({
        start: 6,
        end: 30,
        step: 4
    })]
}`);
```
