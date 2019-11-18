// ARRY DESTRUCTURING

// destructuring: decomposing a structure into its individual parts.

// destructuring: imperative
var tmp = getSomeRecords();

var first = tmp[0];
var second = tmp[1];

var firstName = first.name;
var firstEmail = first.email !== undefined ? first.email : "nobody@none.ltd";

var secondName = second.name;
var secondEmail = second.email !== undefined ? second.email : "nobody@none.ltd";

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