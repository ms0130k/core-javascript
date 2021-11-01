'use strict';

function HelloFunc(func) {
  this.greeting = 'hello';
}
HelloFunc.prototype.call = function (func) {
  func ? func(this.greeting) : this.func(this.greeting);
};

const userFunc = function (greeting) {
  console.log(greeting);
};

const hello = new HelloFunc();
hello.func = userFunc;
hello.call();

function NewObj(obj, name) {
  obj.func = saySomething(this, 'who', name);
}

function saySomething(obj, methodName, name) {
  return function (greeting) {
    obj[methodName](greeting, name);
  };
}

NewObj.prototype.who = function (greeting, name) {
  console.log(`${greeting} ${name}`);
};

new NewObj(hello, 'shock');
hello.call();
