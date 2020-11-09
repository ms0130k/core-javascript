// var obj = {
//   methodA: function () {
//     console.log(this);
//   },
//   inner: {
//     methodB: function () {
//       console.log(this);
//     },
//   },
//   sample: '22',
// };
// obj.methodA();
// obj['methodA']();
// obj.inner.methodB();
// obj.inner['methodB']();
// obj['inner'].methodB();
// obj['inner']['methodB']();

var obj1 = {
  sample: 'sample',
  outer: function () {
    console.log(this);
    var innerFunc = function () {
      console.log(this);
    };
    innerFunc();

    var obj2 = {
      innerMethod: innerFunc,
      this_: 'obj2',
    };
    obj2.innerMethod();
  },
  this_: 'obj1',
};

obj1.outer();
