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

You cannot call await within a non async function.

```js
// async FP Iterations
async function fetchFiles(files) {
    var prs = files.map( getFile );

    prs.forEach( function each(pr) { // notice function!
        console.log( await pr ); // cant await in a normal function
    });
}

```

For better async FP iterations, look at getify's library [fasy](https://github.com/getify/fasy).

## Async Function Problems

* await only promises
* Scheduling (**Starvation problem**), look at microtask queue
* External cancelation, they cannot be cancelled once started!

Kyle Simpson has a library to allow [cancelable async functions](https://github.com/getify/caf).

This could be a problem because if you make an async call to a network drive and the network goes down, your async call will be stuck.

## Async Generators with yield

async* ..yield await—ES2018.

```js
//async all-at-once (pull method) with object to return
async function fetchURLs(urls) {
    var results = [];

    for(let url of urls) {
        let resp = await fetch( url );
        if(resp.status == 200) {
            let text = await rest.text();
            results.push( text.toUpperCase() );
        } else {
            results.push( undefined );
        }
    }

    return results;
}
```

```js
//overloaded yield (push method !!this is confusing)
function *fetchURLS(urls) {
    for(let url of urls) {
        let resp = yield fetch( url ); // this is pulling
        if(resp.status == 200) {
            let text = yield resp.text();
            yield text.toUpperCase(); // this is pushing
        } else {
            yield undefined;
        }
    }
}
```

The solution to the push / pull method is async generators.

```js
async function *fetchURLs(urls) {
    for(let url of urls) {
        let resp = await fetch( url );
        if(resp.status == 200) {
            let text = await resp.text();
            yield text.toUpperCase();
        } else {
            yield undefined;
        }
    }
}
```

## Async Generators Iteration

When you call an async generator, you get back a special iterator object back. This let's you iterate over it as it has results.

```js
// async interation
async function main(favoriteSites) {
    var it = fetchURLs( favoriteSites );

    while(true) {
        let res = await it.next();
        if(res.done) break;
        let text = res.value;

        console.log( text );
    }
}

// this evolved into for await!

async function main(favoriteSites) {
    for await ( let text of fetchURLs (favoriteSites)) {
        console.log( text );
    }
}

```

Now we have generators that can push out values either lazily or right away. We also have async operations that can pull asynchronously. Finally we can pull lazily asynchronously.
