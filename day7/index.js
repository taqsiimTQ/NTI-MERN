// Part A

function noStrictMode() {
    undeclaredVar = "global variable";
}
noStrictMode();
console.log(undeclaredVar);

function withStrictMode() {
    "use strict";
    try {
        strictVar = "This will fail";
    } catch (err) {
        console.log(err.message);
    }
}
withStrictMode();

function strictDelete() {
    "use strict";
    var localvar = "test";

    // delete localvar; // breaks the code

    const testObj = { key: "value" };
    delete testObj.key;
    console.log(testObj);
}
strictDelete();

// Part B

console.log(x);
var x = 10;
console.log(x);

sayHi();
function sayHi() {
    console.log("Hi");
}

try {
    sayBye();
    var sayBye = function () {
        console.log("Bye");
    };
} catch (err) {
    console.log(err.message);
}

// console.log(a); // throws an error so I commented it out
let a = 5;

var n = 1;
function demo() {
    console.log(n);
    var n = 2;
    console.log(n);
}
demo();
console.log(n);

// Part C

function testVarScope() {
    if (true) {
        var functionScoped = "Visible outside if block";
    }
    console.log(functionScoped);
}
testVarScope();

if (true) {
    let blockScoped = "Invisible outside";
    const alsoBlockScoped = "Invisible outside";
}
// console.log(blockScoped); // doesn't work

var reVar = 1;
var reVar = 2;

let reLet = 1;
// let reLet = 2;

const student = { name: "Ahmed", age: 20, city: "Cairo" };
student.age = 21;
student.grade = "A";
delete student.city;
console.log(student);

// student = { name: "Sara" }; // error

const nums = [1, 2, 3];
nums.push(4);
nums[0] = 99;
// nums = [5, 6, 7];
console.log(nums);

var a_var;
let b_let;
// const c_const;

var g1 = "var global";
let g2 = "let global";
const g3 = "const global";

const handlers = {};
for (let i = 0; i < 3; i++) { // changed var to let to fix the bug
    handlers["fn" + i] = function () {
        return "index: " + i;
    }
};
console.log(handlers.fn0());
console.log(handlers.fn2());

// Part D

const welcome = (name) => {
    return `Welcome, ${name}!`;
}
console.log(welcome("Student"));

const fullInfo = (first, last, age) => {
    return `${first} ${last} is ${age} years old`;
}
console.log(fullInfo("Ali", "Hassan", 25));

const multiply = (a, b) => a * b;
const addAndPrint = (a, b) => {
    console.log(a, b);
    return a + b;
};
console.log(multiply(5, 4));
console.log(addAndPrint(5, 4));

// Part E

const product = { title: "Laptop", price: 15000, inStock: true, brand: "Dell" };
const { title, price, inStock } = product;
console.log(title, price, inStock);

const techStack = ["HTML", "CSS", "JS", "React"];
const [firstItem, secondItem] = techStack;
console.log(firstItem, secondItem);

const greet = (name = "Guest", message = "Hello") => {
    return `${message}, ${name}!`;
}
console.log(greet("John", "Welcome"));
console.log(greet("John"));
console.log(greet());

const sumAll = (...numbers) => {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));

let array1 = [1, 2];
let array2 = [3, 4, 5];
const mergedArr = [...array1, ...array2];
console.log(mergedArr);

const originalArr = [10, 20, 30];
const copiedArr = [...originalArr];
copiedArr.push(40);
console.log(originalArr);
console.log(copiedArr);

const user = { name: "Sara", age: 22 };
const contact = { email: "sara@nti.com", age: 23 };
const mergedUser = { ...user, ...contact };
console.log(mergedUser);

const values = [2, 4, 6, 8];
function total(a, b, c, d) { return a + b + c + d; }
console.log(total(...values));

// Part F

let person1 = { name: "Ali", child: { age: 5 } };
let person2 = person1;
person2.name = "Omar";
console.log(person1.name);

const originalData = { name: "Mona", details: { city: "Cairo" } };
const shallowCopy = { ...originalData };
shallowCopy.name = "Hoda";
shallowCopy.details.city = "Alex";
console.log(originalData);
console.log(shallowCopy);

const deepCopy = JSON.parse(JSON.stringify(originalData));
deepCopy.details.city = "Aswan";
console.log(originalData.details.city);
console.log(deepCopy.details.city);

const userObj = { name: "Ahmed", age: 26, city: "Alex" };
localStorage.setItem("userdata", JSON.stringify(userObj));
let dataFromStorage = localStorage.getItem("userdata");
let parsedData = JSON.parse(dataFromStorage);
console.log(typeof parsedData, parsedData);
localStorage.removeItem("userdata");


// Part G

const APP_CONFIG = {
    name: "MyApp",
    version: "1.0.0",
    api: { baseUrl: "http://api.com", timeout: 5000 },
    features: ["auth"]
};
APP_CONFIG.api.timeout = 10000;
APP_CONFIG.features.push("payment");
// APP_CONFIG = {}; // gives an error
console.log(APP_CONFIG);

const createCard = (title, price = 0, ...tags) => {
    return {
        title: title,
        price: price,
        tags: tags,
        label: `${title} ${price} EGP`
    };
};
console.log(createCard("Laptop", 15000, "tech", "computer"));
console.log(createCard("Mouse", undefined, "accessory"));

const studentsData = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];

for (let i = 0; i < studentsData.length; i++) {
    let { name, grade } = studentsData[i];
    console.log(`${name} scored ${grade}`);
}
