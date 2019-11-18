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
