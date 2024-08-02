
let n = parseInt(prompt('Enter a number:'));
for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


let char = prompt('Enter a character:').toLowerCase();
if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
  console.log('Vowel');
} else {
  console.log('Consonant');
}


let evenCount = 0;
let oddCount = 0;
for (let i = 1; i <= 999; i++) {
  if (i % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}
console.log(`Even count: ${evenCount}`);
console.log(`Odd count: ${oddCount}`);


let inputString = 'hello';
let charToCount = 'l';
let count = 0;
for (let char of inputString) {
  if (char === charToCount) {
    count++;
  }
}
console.log(`Count of '${charToCount}' in '${inputString}': ${count}`);


let array = [1, 9, 8];
let sum = 0;
for (let num of array) {
  sum += num;
}
let average = sum / array.length;
console.log(`Sum: ${sum}, Average: ${average}`);


let largest = array[0];
for (let num of array) {
  if (num > largest) {
    largest = num;
  }
}
console.log(`Largest number: ${largest}`);
