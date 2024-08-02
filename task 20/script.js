//1
const numbers = [15, 22, 5, 18, 30];

const firstGreaterThan20 = numbers.find(num => num > 20);
console.log(firstGreaterThan20); 



//2
const firstLessThan20 = numbers.find(num => num < 20);
console.log(firstLessThan20); 

//3

const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
];

const randomId = 2;
const filteredItems = items.filter(item => item.id === randomId);
console.log(filteredItems); 

//4

const numbersArray = [90, 89, 56, 45];

const isOdd = num => num % 2 !== 0;
const oddNumbers = numbersArray.filter(isOdd);
console.log(oddNumbers); // Output: [89, 45]

const isEven = num => num % 2 === 0;
const evenNumbers = numbersArray.filter(isEven);
console.log(evenNumbers); 





//5
class Book {
    constructor(typeOfBook, numberOfPages, typeOfPages, author) {
        this.typeOfBook = typeOfBook;
        this.numberOfPages = numberOfPages;
        this.typeOfPages = typeOfPages;
        this.author = author;
    }

    getBookInfo() {
        return `Book: ${this.typeOfBook}, Pages: ${this.numberOfPages}, Type of Pages: ${this.typeOfPages}, Author: ${this.author}`;
    }
}

const myBook = new Book('Novel', 300, 'Hardcover', 'John Doe');
console.log(myBook.getBookInfo()); 




//6
class Animal {
    constructor(name, gender, disease) {
        this.name = name;
        this.gender = gender;
        this.disease = disease;
    }

    walk() {
        console.log(`${this.name} is walking`);
    }

    eat() {
        console.log(`${this.name} is eating`);
    }

    climb() {
        console.log(`${this.name} is climbing`);
    }
}

const myAnimal = new Animal('Lion', 'Male', 'None');
myAnimal.walk(); 
myAnimal.eat();  
myAnimal.climb(); 

