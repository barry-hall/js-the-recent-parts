# Async & Await

## Async Functions

Async and await arrived in ES2017. These are the evolution to promises.

```js
// a promise chain example.
fectchCurrentUser()
.then(function onUser(user){
    return Promise.all([
        fetchArchivedOrders( user.id ),
        fetchCurrentOrders( user.id )
    ]);
})
.then(function onOrders(
    [ arvhivedOrders, currentOrders]
){
    //..
});
```

This was the accepted way to do async for a couple of years, instead of callback hell.

This example is known as the sync async pattern that is now preferrable.

```js
// async sync pattern (with generators)
runner( function *main() {
    var user = yield fetchCurrentUser();
    var [ archivedOrders, currentOrders ] =
        yield Promise.all([
            fetchArchivedOrders( user.id ),
            fetchCurrentOrders( user.id )
        ]);
    //..
});
```

This example uses async functions instead of having to use a generator to yield. Using this you can just invoke main and don't need to use a runner. Essentially they built the whole runner _thing_ into the JS engine and gave us the following syntax. This shipped officially in ES2017.

```js
// async functions
async function main() {
    var user = await fetchCurrentUser();
    var [ archivedOrders, currentOrders ] =
        await Promise.all([
            fetchArchivedOrders( user.id ),
            fetchCurrentOrders( user.id )
        ]);
    //..
});

main();
```

## Async Iterations



## Async Function Problems



## ASync Generators with yield



## Async Generators Iteration


