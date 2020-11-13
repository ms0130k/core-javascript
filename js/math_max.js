function getMaxOfArray_1(numArray) {
	return Math.max.apply(null, numArray);
}
function getMaxOfArray_2(numArray) {
	return Math.max(...numArray);
}
var arr = [1, 2, 3];
console.log(getMaxOfArray_1(arr));
console.log(getMaxOfArray_2(arr));

var max = arr.reduce(function (a, b) {
	return Math.max(a, b);
});
console.log(max);

/*
Spread syntax (...) allows an iterable such as array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
*/

const test = function () {
	console.log(arguments);
	console.log(typeof arguments);
	console.log('----------');
	console.log(Array.prototype.push.apply(arguments, [9, 8, 'test']));
	const arrArgs = Array.from(arguments);
	arrArgs.push('test_');
	console.log(arrArgs);
	console.log(arguments);
};
test('abcd', 123);

console.log('=================');
var arr = [1, 2, 3, 9];
var max = arr.reduce((acc, cur) => Math.max(acc, cur));
console.log(max);
