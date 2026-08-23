console.log("JS is running successfully")

alert("Ready to practice")


var productName = "Laptop"
var price = 15000
var isAvailable = true

console.log(typeof productName)
console.log(typeof price)
console.log(typeof isAvailable)
document.getElementById("mainTitle").innerText = "Practice Time"

var city = "Cairo"
var country = "Egypt"

console.log(city + " , " + country)
console.log(`${city}, ${country}`)

var itemPrice = 120
var quantity = 3
var total = itemPrice * quantity


console.log(total)
console.log(400 - total)
console.log(itemPrice * itemPrice * itemPrice)
console.log(itemPrice / quantity)
console.log(itemPrice % quantity)
console.log(quantity ** 2)


var favoriteColor = prompt("What is your favorite color?")
console.log(`${favoriteColor}`)

let score = 20;
let textScore = "20";

console.log(score == textScore)
console.log(score === textScore)
// == checks the value only , === checks the value and the data type

var quantityStr = prompt("Enter a number:");

var num1 = Number(quantityStr);
console.log(num1, typeof num1);

var num2 = parseInt(quantityStr);
console.log(num2, typeof num2);

var num3 = +quantityStr;
console.log(num3, typeof num3);

var fruits = ["apple", "banana", "mango"];
console.log(fruits[1]);
fruits[1] = "orange";
fruits.push("grape");
console.log(fruits);

var course = { title: "JavaScript Intro", hours: 20, level: "Beginner" };
course.title = "JavaScript Advanced";
console.log(course.hours);
console.log(course);

var hasAccount = true;
var isVerified = false;

console.log(hasAccount && isVerified)
console.log(hasAccount || isVerified)
console.log(!isVerified)

var balance = 50;
balance += 30;
balance *= 2;
balance -= 20;
console.log(balance);

var hotelName = prompt("Enter hotel name:");
var nights = prompt("Enter number of nights:");
var isConfirmed = prompt("Is the booking confirmed?");

var message = `Hotel: ${hotelName}, Nights: ${nights}, Confirmed: ${isConfirmed}`;
alert(message);
console.log(message);

console.log(2 + 8 + "0");   // "100"
console.log("2" + 8 + 0);   // "280"
console.log(2 + "8" + 0);   // "280"

// Primitive pass by value
var city1 = "Alex";
var city2 = city1;
city2 = "Giza";
console.log("Cities:", city1, city2);

// Object pass by reference
var car1 = { brand: "Toyota" };
var car2 = car1;
car2.brand = "Honda";
console.log("Reference Copy:", car1, car2);

// Correct object copy
var car3 = { brand: "Toyota" };
var car4 = Object.assign({}, car3);
car4.brand = "Honda";
console.log("Proper Copy:", car3, car4);

var mixedBag = ["hello", 42, true, null, undefined, { name: "Ali" }, [1, 2, 3]];
for (var i = 0; i < mixedBag.length; i++) {
  console.log(`Index ${i} typeof:`, typeof mixedBag[i]); // because null is an object in js
}

var clientName = prompt("client name:");
var orderPriceStr = prompt("order price:");
var isPaid = prompt("Is the order paid?");

var orderPrice = Number(orderPriceStr);

console.log(`Client: ${clientName} | Price: $${orderPrice} | Paid: ${isPaid}`);
alert(`Client: ${clientName} | Price: $${orderPrice} | Paid: ${isPaid}`);

var resultElement = document.getElementById("result");
if (resultElement) resultElement.innerText = `Client: ${clientName} | Price: $${orderPrice} | Paid: ${isPaid}`;

var n1 = Number(prompt("first number:"));
var n2 = Number(prompt("second number:"));

console.log(`${n1} + ${n2} = ${n1 + n2}`);
console.log(`${n1} - ${n2} = ${n1 - n2}`);
console.log(`${n1} * ${n2} = ${n1 * n2}`);
console.log(`${n1} / ${n2} = ${n1 / n2}`);
console.log(`${n1} % ${n2} = ${n1 % n2}`);
console.log(`${n1} ** ${n2} = ${n1 ** n2}`);

var a = 40
var b = 50
var c = "60" // this value is a string not a numer
var d = 30
var e = 30
console.log(a + b + Number(c) + d + e)

a = "15";
b = 15;
c = null;
d = undefined;
e = [15];
var f = { value: 15 };

console.log(a, typeof a, a == 15, a === 15);
console.log(b, typeof b, b == 15, b === 15);
console.log(c, typeof c, c == 15, c === 15);
console.log(d, typeof d, d == 15, d === 15);
console.log(e, typeof e, e == 15, e === 15);
console.log(f, typeof f, f == 15, f === 15);


var productName = prompt("product name:");
var brand = prompt("brand:");
var priceInput = prompt("price:");
var category = prompt("category:");
var inStock = confirm("Is this product in stock?");

var price = Number(priceInput);

var productInfo = {
  productName: productName,
  brand: brand,
  price: price,
  category: category,
  inStock: inStock
};

var finalMessage = `Product: ${productInfo.productName}\nBrand: ${productInfo.brand}\nCategory: ${productInfo.category}\nPrice: $${productInfo.price}\nIn Stock: ${productInfo.inStock ? "Yes" : "No"}`;

alert(finalMessage);
console.log(productInfo);

// Reusing resultElement declared in Task 19
if (resultElement) {
  resultElement.innerText = finalMessage;
}

if (productName && productName.length > 0) {
  console.log(`First letter of product: ${productName[0]}`);
}
