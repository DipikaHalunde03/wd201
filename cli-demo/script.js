// const readline = require("readline");

// const lineDetail = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// lineDetail.question(`Please provide your name - `, (name) => {
//   console.log(`Hi ${name}!`);
//   lineDetail.close();
// });

// const args = process.argv;
// const num1 = parseInt(args[2]);
// const num2 = parseInt(args[3]);
// console.log(`The sum is: ${num1 + num2}`);

// console.log('args[0]:', args[0]);
// console.log('args[1]:', args[1]);
// console.log('args[2]:', args[2]);
// console.log('args[3]:', args[3]);

const args = process.argv;
const operation = args[2];
const num1 = parseInt(args[3]);
const num2 = parseInt(args[4]);

if (operation === 'add') {
  console.log(`The result is: ${num1 + num2}`);
} else if (operation === 'subtract') {
  console.log(`The result is: ${num1 - num2}`);
} else if (operation === 'multiply') {
  console.log(`The result is: ${num1 * num2}`);
} else {
  console.log('Unknown operation');
}