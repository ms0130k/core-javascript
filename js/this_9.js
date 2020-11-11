var a = function () {
	var argv = Array.prototype.slice.call(arguments);
	argv.forEach(function (arg) {
		console.log(arg);
	});
};
a(1, 2, 3);
a();
/*
The arguments object
arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
*/

document.body.innerHTML = '<div>a</div><div>b</div><div>c</div>';
var nodeList = document.querySelectorAll('div');
var nodeArr = Array.prototype.slice.call(nodeList);
nodeArr.forEach(function (node) {
	console.log(node);
});
nodeList.forEach((node, i) => {
	console.log(i, node);
});
console.log(nodeList);
console.log(nodeArr);

var str = 'abc def';

// Array.prototype.push.call(str, ', pushed string');
// console.log(str);
Array.prototype.concat.call(str, 'string');
console.log('>>> concat: ', str);

/* The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value */
var every = Array.prototype.every.call(str, (char) => char != ' ');
console.log('>>> every: ', every);

/* The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value. */
var some = Array.prototype.some.call(str, (char) => char === ' ');
console.log('>>> some: ', some);

/* The map() method creates a new array populated with the results of calling a provided function on every element in the calling array */
var newArr = Array.prototype.map.call(str, (char) => char + '!');
console.log('>>> map: ', newArr);

/* The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value. 
The reducer function takes four arguments:
1. Accumulator(acc)
2. Current Value(cur)
3. Current Index(idx)
4. Source Array(src)
Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final single resulting value. 

Syntax
arr.reduce(callback( accumulator, currentValue[, index[, array]] ) {
    // return result from executing something for accumulator or currentValue
}[, initialValue]);
*/
console.log('>>> str: ', str);
var newStr = Array.prototype.reduce.apply(str, [
	(string, char, i, arr) => string + char + i + arr[i],
	'',
]);
console.log('>>> reduce_apply: ', newStr);

var newStr = Array.prototype.reduce.call(
	str,
	(string, char, i, arr) => string + char + i + arr[i]
);
console.log('>>> reduce_call: ', newStr);
