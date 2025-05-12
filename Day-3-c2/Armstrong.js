const {armstrong} = require('armstrong');

// Example number
const number = 153;

if (armstrong(number)) {
  console.log(`${number} is an Armstrong number.`);
} else {
  console.log(`${number} is NOT an Armstrong number.`);
}
