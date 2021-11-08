Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
};

const Person = function (arg) {
  this.name = arg;
};
Person.method('setName', function (name) {
  this.name = name;
});

Person.method('getName', function () {
  return this.name;
});

const Student = function (arg) {};
const F = function () {};
F.prototype = Person.prototype;
Student.prototype = new F();
Student.prototype.constructor = Student;
Student.super = Person.prototype;

const me = new Student();
me.setName('shock');
console.log(me.getName());

const inherit = (function (Parent, Child) {
  const F = function () {};
  return function (Parent, Child) {
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.super = Parent.prototype;
  };
})();

const Animal = function (name) {
  this.name = name;
};
Animal.method('walk', function () {
  console.log(`${this.name} walk`);
});

new Animal().walk();
new Animal('shock').walk();

const Tiger = function (arg) {};
inherit(Animal, Tiger);
new Tiger('tiger').walk();
