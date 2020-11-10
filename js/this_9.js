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
console.log(str);
Array.prototype.every.call(str, function (char) {
  return char != ' ';
});
console.log(str);
