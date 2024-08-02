
const animal = { type: 'dog', name: 'Buddy', age: 3 };
const car = { make: 'Toyota', model: 'Camry', year: 2020 };
console.log(animal);
console.log(car);


const findDuplicates = (str) => {
  const chars = str.split('');
  const duplicates = chars.filter((item, index) => chars.indexOf(item) !== index);
  return [...new Set(duplicates)];
};
console.log(findDuplicates('aabbccdde'));


const reverseString = (str) => str.split('').reverse().join('');
console.log(reverseString('hello world'));


const arr = [1, 5, 3, 9, 2];
const max = Math.max(...arr);
const min = Math.min(...arr);
console.log(max, min);


const sortedArray = arr.sort((a, b) => a - b);
console.log(sortedArray);


const displayArray = (arr) => {
  const firstThree = arr.slice(0, 3);
  firstThree.forEach(item => {
    const element = document.createElement('div');
    element.textContent = item;
    document.body.appendChild(element);
  });
};
displayArray(arr);


arr.splice(3, 1, 7, 8);
console.log(arr);
