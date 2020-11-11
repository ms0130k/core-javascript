var numbers = [10, 20, 3, 16, 45];
var max = (min = numbers[0]);
numbers.forEach((number) => {
	if (number > max) max = number;
	if (number < min) min = number;
});
console.log(max, min);

var numbers = [10, 20, 3, 16, 45];
console.log(Math.max(...numbers), Math.min(...numbers));
console.log(Math.max.apply(null, numbers), Math.min.apply(null, numbers));

console.log(
	Math.max.call(
		null,
		numbers[0],
		numbers[1],
		numbers[2],
		numbers[3],
		numbers[4]
	)
);

/*
Spread syntax (...)
Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
*/
function sum(x, y, z) {
	console.log(this);
	return x + y + z;
}
var numbers = [1, 2, 3];
console.log(sum(...numbers));
console.log(sum.apply(numbers, numbers));
