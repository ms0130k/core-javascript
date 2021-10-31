// 'use strict';
var value = 'value1';

function printValue() {
  return value;
}

function printFunc(func) {
  var value = 'value2';
  function func2() {
    return value;
  }
  console.dir(func2);
  console.dir(func);
  console.log(func());
}

printFunc(printValue);
