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

## Declarative Iterators


## Data Structure without Iterators


## Generators
