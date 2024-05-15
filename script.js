// Exercise 3 - for loop
// single loop
let result1 = "";
for (let i = 0; i < 5; i++) {
	result1 += "* ";
	console.log(result1);
}

// nested loop
let result2 = "";
for (let j = 0; j < 5; j++) {
	for (let k = 0; k < 1; k++) {
		result2 += "* ";
		console.log(result2);
	}
}

// Exercise 4 - while loop
// Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time, as long as xValue remains positive.
let x = 4;
while (x >= 0) {
	console.log(`${x} Value`);
	x -= 0.5;
}

// Print all the odd numbers between 1 - 100.
let odd = 1;
while (odd < 100) {
	console.log(odd);
	odd += 2;
}

// Write a method with a while loop to print 1 through n in square brackets. For example, if n = 6 print [1] [2] [3] [4] [5] [6]
let l = 1;
let n = 19;
while (l <= n) {
	console.log([l]);
	l++;
}

// Write a method with a while loop that computes the sum of first n positive integers
let m = 1;
let sum = 0;
while (m <= n) {
	sum += m;
	m++;
}
console.log(sum);
