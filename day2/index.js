
for (var i = 1; i <= 10; i++) {
  console.log("Seat:", i);
}

for (var i = 2; i <= 20; i += 2) {
  console.log("Event Seat:", i);
}

var totalSales = 0;
for (var i = 1; i <= 15; i++) {
  totalSales += i;
}
console.log(totalSales);

var ticket = 1;
while (ticket <= 7) {
  console.log(ticket);
  ticket++;
}

var countdown = 8;
while (countdown >= 1) {
  console.log(countdown);
  countdown--;
}

var firstVisit = 1;
do {
  console.log("Welcome ", firstVisit);
  firstVisit++;
} while (firstVisit <= 5);

var itemsInCart = 0;
// While loop checks condition first
while (itemsInCart > 0) {
  console.log("You have items in cart.");
}
// Do...while executes at least once before checking the condition.
do {
  console.log("Start shopping ");
} while (itemsInCart > 0);

var userName = "Ali";
var userAge = 22;
var isStudent = true;

console.log(userName, typeof userName);
console.log(userAge, typeof userAge);
console.log(isStudent, typeof isStudent);

var dbPrice = 10;
var inputPrice = "10";
console.log(dbPrice == inputPrice);
console.log(dbPrice === inputPrice);

var userName2 = prompt("Enter your name:");
var welcomeMsg = `Welcome, ${userName2}`;
alert(welcomeMsg);
console.log(welcomeMsg);

var checkoutQty = prompt(" Enter number of pieces:");
console.log(Number(checkoutQty), typeof Number(checkoutQty));
console.log(parseInt(checkoutQty), typeof parseInt(checkoutQty));
console.log(+checkoutQty, typeof +checkoutQty);

var a = 10;
var b = 3;
console.log("Add:", a + b);
console.log("Sub:", a - b);
console.log("Multi:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exp:", a ** b);

var cinemaAge = Number(prompt("Enter your age for the cinema:"));
if (cinemaAge >= 18) {
  console.log("You can enter");
} else {
  console.log("Sorry, underage");
}

var grade = Number(prompt(" Enter your exam grade (0-100):"));
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("F");
}

var ageInput = Number(prompt("Enter your age for label:"));
var ageLabel = ageInput >= 18 ? "Adult" : "Minor";
console.log("Label:", ageLabel);

var workday = prompt("Enter the current day of the week:");
switch (workday.toLowerCase()) {
  case "saturday":
  case "sunday":
    console.log("Weekend");
    break;
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
    console.log("Workday");
    break;
  case "friday":
    console.log("Weekend / Holiday");
    break;
  default:
    console.log("Invalid day");
}

var unitPrice = Number(prompt("Enter unit price:"));
var j;
for (j = 1; j <= 10; j++) {
  console.log(j + " x " + unitPrice + " = " + (j * unitPrice));
}

var fileSize = Number(prompt("Enter file size:"));
if (fileSize > 0) {
  for (j = 1; j <= fileSize; j++) {
    console.log("Downloaded:", j);
  }
} else {
  console.log("Invalid file size");
}

var startId = Number(prompt("Enter start ID:"));
var endId = Number(prompt("Enter end ID:"));
for (j = startId; j <= endId; j++) {
  if (j % 2 === 0) {
    console.log(j, "express");
  } else {
    console.log(j, "normal");
  }
}

var roster = ["Ahmed", "Sara", "Ali", "Omar", "Mona"];
for (j = 0; j < roster.length; j++) {
  console.log("Student " + (j + 1) + ": " + roster[j]);
}

var expenseSum = 0;
for (j = 1; j <= 5; j++) {
  expenseSum += Number(prompt("Enter expense for day " + j + ":"));
}
console.log("Sum:", expenseSum);
console.log("Average:", expenseSum / 5);

var correctPin = "1234";
var attempts = 0;
var enteredPin;
while (attempts < 3) {
  enteredPin = prompt("Enter your PIN:");
  attempts++;
  if (enteredPin === correctPin) {
    console.log("Success: Access Granted");
    break;
  }
}
if (enteredPin !== correctPin) {
  console.log("Failed: Account Locked after 3 attempts");
}

var hasAccount = true;
var isVerified = false;

console.log(!isVerified);
console.log(hasAccount || isVerified);
console.log(hasAccount && isVerified);

if (hasAccount && isVerified) {
  console.log("Welcome back");
} else if (hasAccount && !isVerified) {
  console.log("Please verify your account.");
} else {
  console.log("Please sign up");
}

a = 40;
b = 50;
var c = "60";
var d = 30;
var e = 30;

var totalSum = a + b + Number(c) + d + e;
console.log(totalSum);

if (totalSum <= 20) {
  var k;
  for (k = 1; k <= totalSum; k++) {
    console.log("Line:", k);
  }
} else {
  console.log("Too big to print line by line");
}

var n = Number(prompt("Enter a number to calculate its factorial:"));
if (n < 0) {
  console.log("Error negative number.");
} else {
  var factorial = 1;
  for (j = 1; j <= n; j++) {
    factorial *= j;
  }
  var factMsg = n + "! = " + factorial;
  alert(factMsg);
  console.log(factMsg);
}
