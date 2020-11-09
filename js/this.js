// example 3-1 전역 공간에서의 this(브라우저 환경)
// console.log(this);
// console.log(window);
// console.log(this === window);

// example 3-3 전역변수와 전역객체(1)
// var a = 1;
// console.log(a);
// console.log(window.a);
// console.log(this.a);

// example 3-14 전역변수와 전역객체(2)
// var a = 1;
// window.b = 2;
// console.log(a, window.a, this.a);
// console.log(b, window.b, this.b);

// window.a = 3;
// b = 4;
// console.log(a, window.a, this.a);
// console.log(b, window.b, this.b);

// example 3-5 전역변수와 전역객체(3)
var a = 1;
console.log(delete window.a);
console.log(a, window.a, this.a);
var b = 2;
console.log(delete b);
console.log(b, window.b, this.b);
window.c = 3;
console.log(delete window.c);
// console.log(c, window.c, this.c);
window.d = 4;
console.log(delete d);
// console.log(d, window.d, this.d);

// func va method
console.log('>>>>>>>>>>>>>>>>>>>>>>> func va method');
var func = function (x) {
  console.log(this, x);
};
func(1);

var obj = {
  method: func,
};
obj.method(2);

var obj = {
  method: function (x) {
    console.log(this, x);
  },
};
obj.method(1);
obj['method'](2);

var obj = {
  methodA: function () {
    console.log(this);
  },
  inner: {
    methodB: function () {
      console.log(this);
    },
  },
};
obj.methodA();
obj['methodA']();
obj.inner.methodB();
