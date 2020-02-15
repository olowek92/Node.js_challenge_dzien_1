// TEST 1

// setTimeout(() => {
//   console.log("Wygląda na to, że wszystko działa :)");
// }, 2000);

// TEST 2

const text = "Hello, World!";

let counter = 0;
//Program wyświetla po znaku z tekstu...
const intervalId = setInterval(() => {
  console.log(text[counter]);
  counter++;

  //...ręcznie musimy mu powiedzieć kiedy należy przerwać wykonywanie - wtedy proces Node.js się zakończy
  if (counter === text.length) {
    clearInterval(intervalId);
  }
}, 400);

// TEST 3

// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
//   });
