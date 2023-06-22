### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

  async functions and the await keyword can be used to delay execution of code until a promise is fulfilled.

- What is a Promise?

  A promise is a guarantee of a future value

- What are the differences between an async function and a regular function?

  Async functions always return promises

- What is the difference between Node.js and Express.js?

  Node.js is a server environment used to run code outside of a browser. Express.js is a back end framework similar to a library like Flask in Python used for writing server files and managing url routes and http requests.

- What is the error-first callback pattern?

  Error objects are the first arguments in the callback function. The second argument is reserved for response data.

- What is middleware?

  Code that runs in the middle of the request response cycle

  3 parameters:
  req
  res
  next

- What does the `next` function do?

  Allows express to move on to the next block of code to run

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON("https://api.github.com/users/elie");
  const joel = await $.getJSON("https://api.github.com/users/joelburton");
  const matt = await $.getJSON("https://api.github.com/users/mmmaaatttttt");

  return [elie, matt, joel];
}
```

No error handling, Promise.all could be used to execute the API calls simultaneously (and will reject if any are rejected)
