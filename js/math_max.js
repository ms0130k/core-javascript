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
