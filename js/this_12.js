var func = function (a, b, c, d) {
	console.log(this, a, b, c, d);
};
func(1, 2, 3, 4);

var bindFunc1 = func.bind({ x: 1 });
bindFunc1(5, 6, 7, 8);

var bindFunc2 = func.bind({ x: 2 }, 4, 5);
bindFunc2(6, 7);
bindFunc2(8, 9);

var bindFunc3 = func.bind(-1, 4, 5, 6, 7);
bindFunc3();

new bindFunc3();
/*
The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

Syntax
let boundFunc = func.bind(thisArg[, arg1[, arg2[, ...argN]]]);

Parameters
thisArg
The value to be passed as the this parameter to the target function func when the bound function is called.
The value to be passed as the this parameter to the target function func when the bound function is called.
The value to be passed as the this parameter to the target function func when the bound function is called.
The value is ignored if the bound function is constructed using the new operator.
The value is ignored if the bound function is constructed using the new operator.
When using bind to create a function (supplied as a callback) inside a setTimeout, any primitive value passed as thisArg is converted to object.

arg1, arg2, ...argN //Optional
Arguments to prepend to arguments provided to the bound function when invoking func.

Return value
A copy of the given function with the specified this value, and initial arguments (if provided)
*/
console.log('===================');
setTimeout(bindFunc3, 1000);
