'use strict';
function execute(param1, param2) {
  var a = 1,
    b = 2;
  function func() {
    var c = 3;
    function func2() {
      return a + c;
    }
    func2();
    console.dir(func2);
    return a + b;
  }
  console.dir(func);
  return param1 + param2 + func();
}
console.dir(execute);

execute(3, 4);
for (let i = 0; i < 10; i++) {
  const a = i;
  console.log(a);
}
