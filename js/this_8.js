var obj = {
	0: { a: 'a' },
	1: 'b',
	2: 'c',
	length: 3,
};
Array.prototype.push.call(obj, 'd');
console.log(obj);

var arr = Array.prototype.slice.call(obj);
obj[0].a = 'g';
console.log(arr);

var arr = [1, 2, 3];
console.log(arr.slice(1, 2));
/*
The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index fo items in that array. The original array will not be modified.
*/
/*
Array-like object
객체에는 배열 메서드를 직접 적용할 수 없습니다. 그러나 키가 0 또는 양의 정수인 프로퍼티가 존재하고 length 프로퍼티의 값이 0 또는 양의 정수인 객체, 즉 배열의 구조와 유사한 객체의 경우(유사배열객체) call 또는 apply 메서드를 이용해 배열 메서드를 차용할 수 있습니다.
*/

var arr = { 0: 'a', length: 5 };
console.log(arr);
Array.prototype.push.call(arr, 'b');
console.log(arr);
Array.prototype.push.call(arr, 'c');
console.log(arr);
