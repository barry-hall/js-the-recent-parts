# Strings

Padding.

```js
// PADDING
var str = `Hello`;

str.padStart( 5 );          // "Hello"
str.padStart( 8 );          // "   Hello"
str.padStart( 8, "*" )      // "***Hello"
str.padStart( 8, "12345" )  // "123Hello"
str.padStart( 8, "ab" )     // "abaHello"

str.padEnd( 5 );          // "Hello"
str.padEnd( 8 );          // "Hello   "
str.padEnd( 8, "*" )      // "Hello***"
str.padEnd( 8, "12345" )  // "Hello123"
str.padEnd( 8, "ab" )     // "Helloaba"

// TRIMMING
var str = `       some stuff    \t\t`;

str.trim()              // "some stuff"
str.timStart()          // "some stuff        "
str.trimEnd()           // "        some stuff"

```

Template strings.

```js
// TEMPLATE STRINGS
var name = "Barry"; 
var email = "hello@barry.com"; 
var title = "Developer";

var msg = `Welcome to this class! Your ${title} is ${name}, 
contact: ${email}`;

console.log(msg);

var amount = 12.30;
var msg = `The price is £${amount.toFixed(2)}`;

console.log(msg);

```