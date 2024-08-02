
let number = 10900;
console.log(number % 3 === 0 ? 'Multiple of 3' : 'Not a multiple of 3');


let str = 'i am learning js';
let subWord = 'js';
console.log(str.includes(subWord) ? 'Exists' : 'Does not exist');


let principle = parseFloat(prompt('Enter the principle amount:'));
let rate = parseFloat(prompt('Enter the rate:'));
let time = parseFloat(prompt('Enter the time:'));
let complexInterest = (principle / rate) * time / 100;
console.log(`Complex Interest: ${complexInterest}`);
