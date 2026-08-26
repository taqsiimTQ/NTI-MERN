var car = {
    brand: "Fiat",
    model: "Punto",
    year: 2010,
    color: "white"
};
console.log(car);

console.log(car.brand);
console.log(car["year"]);

car.color = "black";
car.price = 50000;
console.log(car);

delete car.year;
console.log(car.year); // undefined becuse the properity is deleted

var myStudent = {
    "student-name": "Sara",
    age: 20
};
console.log(myStudent["student-name"]);

var myBook = {
    title: "Harry Potter",
    author: {
        firstName: "J.K.",
        lastName: "Rowling"
    }
};
console.log(myBook.author.lastName);

var personObj = { name: "Ali", age: 25, city: "Cairo" };
console.log(Object.keys(personObj));
console.log(Object.values(personObj));
console.log(personObj.hasOwnProperty("job"));

var settings = { theme: "dark", lang: "en" };
Object.freeze(settings);
settings.theme = "light";
settings.fontSize = 16;
console.log(settings); // the object stayed the same

var citiesList = ["Alexandria", "Cairo", "Luxor", "Aswan", "Mansoura"];
console.log(citiesList);
console.log(citiesList.length);

console.log(citiesList[0]);
console.log(citiesList[1]);
console.log(citiesList[citiesList.length - 1]);

citiesList.push("Tanta");
console.log(citiesList);
citiesList.unshift("Port Said");
console.log(citiesList);

citiesList.pop();
console.log(citiesList);
citiesList.shift();
console.log(citiesList);

var webArray = ["HTML", "CSS", "JS", "React"];
console.log(webArray.indexOf("JS"));
var hasPython = webArray.includes("Python");
console.log(hasPython);

var itemsArray = ["pen", "book", "bag"];
itemsArray.forEach(function(item, index) {
    console.log(item);
    console.log(index);
});

var colorsArray = ["red", "green", "blue", "yellow"];
for (var color of colorsArray) {
    if (color == "blue") {
        break;
    }
    console.log(color);
}

var lettersArray = ["A", "B", "C"];
lettersArray.push("D");
lettersArray.push("E");
lettersArray.shift();
console.log(lettersArray);
console.log(lettersArray.length);

var fruitsArray = ["apple", "banana", "cherry"];
var upperFruits = fruitsArray.map(function(fruit) {
    return fruit.toUpperCase();
});
console.log(upperFruits);
console.log(fruitsArray);

var numbersArray = [10, 55, 30, 80, 45, 90];
var bigNumbers = numbersArray.filter(function(num) {
    return num > 50;
});
console.log(bigNumbers);

var egCities = ["Cairo", "Giza", "Alex", "Aswan"];
var cityStartsA = egCities.find(function(city) {
    return city[0] == "A";
});
console.log(cityStartsA);
var cityIndexA = egCities.findIndex(function(city) {
    return city[0] == "A";
});
console.log(cityIndexA);

var alphabetArray = ["a", "b", "c", "d", "e"];
var slicedLetters = alphabetArray.slice(1, 4);
console.log(slicedLetters);
console.log(alphabetArray);

var wordsArray = ["one", "two", "three", "four", "five"];
var removedWords = wordsArray.splice(1, 2);
console.log(removedWords);
console.log(wordsArray);

var mixedNumbers = [40, 100, 1, 5, 25];
mixedNumbers.sort(function(a, b) {
    return a - b;
});
console.log(mixedNumbers);

var agesArray = [16, 21, 17, 19];
var someAdults = agesArray.some(function(age) {
    return age >= 18;
});
console.log(someAdults);
var allAdults = agesArray.every(function(age) {
    return age >= 18;
});
console.log(allAdults);

var smallNums = [5, 10, 15, 20];
var sumTotal = smallNums.reduce(function(total, current) {
    return total + current;
}, 0);
console.log(sumTotal);

var studentsClass = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];
for (var i = 0; i < studentsClass.length; i++) {
    console.log(studentsClass[i].name);
    console.log(studentsClass[i].grade);
}

var smartStudents = studentsClass.filter(function(student) {
    return student.grade >= 80;
});
var smartNames = smartStudents.map(function(student) {
    return student.name;
});
console.log(smartNames);

var shopProducts = [
    { name: "Keyboard", price: 200 },
    { name: "Mouse", price: 100 },
    { name: "Screen", price: 800 }
];
var totalShopPrice = shopProducts.reduce(function(total, prod) {
    return total + prod.price;
}, 0);
console.log(totalShopPrice);

var techWords = ["js", "html", "css", "js", "react", "js"];
var jsCount = 0;
for (var w = 0; w < techWords.length; w++) {
    if (techWords[w] == "js") {
        jsCount++;
    }
}
console.log(jsCount);

var classroom = {
    teacher: "Mr. Ahmed",
    students: ["Youssef", "Kareem", "Nour", "Hoda"]
};
console.log(classroom.teacher);
console.log(classroom.students.length);
console.log(classroom.students[classroom.students.length - 1]);

var finalItems = [
    { id: 1, title: "Pen", price: 10 },
    { id: 2, title: "Book", price: 50 },
    { id: 3, title: "Bag", price: 25 }
];
var upperTitlesList = finalItems.map(function(item) {
    return item.title.toUpperCase();
});
console.log(upperTitlesList);

var cheapItems = finalItems.filter(function(item) {
    return item.price < 30;
});
console.log(cheapItems);

var allItemsTotal = finalItems.reduce(function(total, item) {
    return total + item.price;
}, 0);
console.log(allItemsTotal);
