// Function.prototype.call(thisArg[, arg1[, arg2[, ...]]]);

var func = function (a, b, c) {
  console.log(this, a, b, c);
};
func(1, 2, 3);
func.call({ x: 1 }, 4, 5, 6);
func.call(this, 1, 2, 3);
func.call(func, 1, 2, 3);

var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};
obj.method(2, 3);
obj.method.call({ a: 4 }, 5, 6);
obj.method.call({ b: 4 }, 5, 6);
