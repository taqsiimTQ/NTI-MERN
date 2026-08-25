var name1 = "Ahmed Ali";
console.log(name1.length);

var sentence2 = "I am learning JavaScript";
console.log(sentence2.toUpperCase());
console.log(sentence2.toLowerCase());

var email3 = "student@nti.com";
var hasAt = email3.includes("@");
console.log(hasAt);

var word4 = "JavaScript";
console.log(word4[0]);
console.log(word4[word4.length - 1]);

var text5 = "This is a bad day";
var newText5 = text5.replace("bad", "good");
console.log(newText5);

var sentence6 = "I love coding";
var wordsArray6 = sentence6.split(" ");
var newSentence6 = wordsArray6.join("-");
console.log(newSentence6);

var text7 = " nti egypt training ";
var cleanText7 = text7.trim();
var upperText7 = cleanText7.toUpperCase();
var finalText7 = upperText7.replace("EGYPT", "CAIRO");
console.log(finalText7);

var string8 = "45.8";
var number8 = Number(string8);
console.log(number8);

var number9 = 7.6;
console.log(Math.round(number9));
console.log(Math.floor(number9));
console.log(Math.ceil(number9));

var largest10 = Math.max(12, 5, 28, 9);
var smallest10 = Math.min(12, 5, 28, 9);
console.log(largest10);
console.log(smallest10);

var random11 = Math.floor(Math.random() * 20) + 1;
console.log(random11);

var price12 = 19.4567;
console.log(price12.toFixed(2));

var r1 = Math.floor(Math.random() * 50) + 1;
var r2 = Math.floor(Math.random() * 50) + 1;
var r3 = Math.floor(Math.random() * 50) + 1;
var r4 = Math.floor(Math.random() * 50) + 1;
var r5 = Math.floor(Math.random() * 50) + 1;
var largest13 = Math.max(r1, r2, r3, r4, r5);
var smallest13 = Math.min(r1, r2, r3, r4, r5);
var sum13 = r1 + r2 + r3 + r4 + r5;
var average13 = sum13 / 5;
console.log(largest13);
console.log(smallest13);
console.log(average13.toFixed(2));

for (var i = 1; i <= 20; i++) {
  console.log(i);
}

for (var j = 1; j <= 15; j++) {
  if (j % 2 !== 0) {
    console.log(j);
  }
}

var k = 10;
while (k >= 1) {
  console.log(k);
  k--;
}

var names17 = ["Sara", "Omar", "Mona", "Youssef"];
for (var n of names17) {
  console.log(n);
}

var output18 = "";
for (var x = 1; x <= 10; x++) {
  if (x == 7) {
    break;
  }
  output18 = output18 + x;
}
console.log(output18);

for (var a = 1; a <= 3; a++) {
  for (var b = 1; b <= 3; b++) {
    var result19 = a * b;
    console.log(a + "*" + b + "=" + result19);
  }
}

for (var y = 1; y <= 30; y++) {
  if (y == 25) {
    break;
  }
  if (y % 3 == 0) {
    continue;
  }
  console.log(y);
}

var word21 = "HELLO";
for (var l = 0; l < word21.length; l++) {
  console.log(word21[l]);
}

var array22 = [10, 20, 30, 40];
var sum22 = 0;
for (var m = 0; m < array22.length; m++) {
  sum22 = sum22 + array22[m];
}
console.log(sum22);

var sentence23 = "JavaScript is amazing and awesome";
var count23 = 0;
for (var c = 0; c < sentence23.length; c++) {
  if (sentence23[c] == "a" || sentence23[c] == "A") {
    count23++;
  }
}
console.log(count23);

var grades24 = [70, 85, 92, 60, 77, 88];
for (var g = 0; g < grades24.length; g++) {
  if (grades24[g] % 2 == 0) {
    console.log(grades24[g]);
  }
}

for (var row25 = 1; row25 <= 4; row25++) {
  var stars25 = "";
  for (var col25 = 1; col25 <= row25; col25++) {
    stars25 = stars25 + "*";
  }
  console.log(stars25);
}

var students26 = ["ahmed", "sara", "omar", "laila", "hassan"];
var matchCount26 = 0;
for (var s = 0; s < students26.length; s++) {
  var upperName26 = students26[s].toUpperCase();
  if (upperName26[0] == "A" || upperName26[0] == "S") {
    console.log(upperName26);
    matchCount26++;
  }
}
console.log(matchCount26);
