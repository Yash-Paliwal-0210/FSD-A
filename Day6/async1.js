// sayHello = () => {
//     console.log("Hello Function");
// };

// console.log("Start")

// setTimeout(sayHello, 4000);
// console.log("End");

// console.log("Start");
// setTimeout( () =>{
//     console.log("first task completed");
//     setTimeout( () =>{
//         console.log("Second");
//         setTimeout(() => {
//             console.log("third");
//         } ,3000)
//     } ,5000)
// },10000);

// const myPromise = new Promise((resolve, reject) => {
//   let result = true;
//   if (result) {
//     console.log("Operation is Succesful");
//   } else {
//     console.log("Operation Rejected");
//   }
// });

// myPromise
//   .then((message) => console.log("Success" + message))
//   .catch((error) => console.log("Error" + error));

function task(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}
task("first task completed", 3000)
  .then(() => task("Second", 2000))
  .then(() => task("Third", 1000));
