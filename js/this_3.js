// var obj = {
//   outer: function () {
//     console.log(this);
//     var innerFunc1 = function () {
//       console.log(this);
//     };
//     innerFunc1();

//     var self = this;
//     var innerFunc2 = function () {
//       console.log(self);
//     };
//     innerFunc2();
//   },
//   this_: 'outer',
// };
// obj.outer();

var obj = {
  outer: function () {
    console.log('outer', this);
    var innerFunc = () => {
      console.log(`inner`, this);
      var innerInnerFunc = () => {
        console.log('innerInner', this);
      };
      innerInnerFunc();
    };
    innerFunc();
  },
  this_: 'obj',
};
obj.outer();

var obj2 = function abc() {
  console.log('test');
};
