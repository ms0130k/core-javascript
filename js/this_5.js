var Cat = function (name, age) {
  this.bark = '야옹';
  this.name = name;
  this.age = age;
};
var choco = new Cat('초코', 7);
var nabi = new Cat('나비', 5);
var nabi2 = new Cat('나비', 5);
console.log(choco, nabi);
console.log(nabi == nabi2);
console.log('2' == 2, '2' === 2);
