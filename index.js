// Promises
let names = ["jenish", "bhautik", "viren", "jay"];

let requests = names.map((name) =>
  fetch(`https://api.github.com/users/${name}`)
);

Promise.all(requests)
  .then((responses) => {
    for (let response of responses) {
      console.log(`${response.url} : ${response.status}`);
    }
    return responses;
  })
  .then((responses) => Promise.all(responses.map((re) => re.json())))
  .then((users) => users.forEach((user) => console.log(user.name)));

// Async Await
// async function func() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Done!");
//     }, 1000);
//   });

//   let result = await promise;
//   console.log(result);
// }

// func();
