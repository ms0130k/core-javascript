// 'use strict';
var Person = function (name) {
  if (!(this instanceof Person)) {
    return new Person(name);
  }
  this.name = name ? name : '무명';
};

var mist = Person('shock');
var corr = new Person('dong');
console.log(mist.name);
console.log(corr.name);
console.log(window.name);
