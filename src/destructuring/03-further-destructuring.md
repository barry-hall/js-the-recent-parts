# Further Destructuring

## Named Arguments

```js
function loopupRecord(store = "person-records", id = -1) {
    // ..
}

// a good rule of thumb is any more than three parameters use this pattern, this means you are less likely to make a mistake with the order of the parameters.

function lookupRecord({
    store = "person-records",
    id = -1
}) {
    // ..
}

lookupRecord( {id: 42});
```

## Destructuring & Restructuring

_An advanved use case of destructuring_.

Common approach.

![destructuring-restructuring-common](./img/destructuring-restructuring-common.png)

Destructure / restructure function approach.

![destructuring-restructuring](./img/destructuring-restructuring.png)

Usage of above.

![destructuring-restructuring-use](./img/destructuring-restructuring-use.png)
