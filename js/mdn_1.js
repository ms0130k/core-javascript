function Person() {
  // Person() 생성자는 `this`를 자신의 인스턴스로 정의.
  this.age = 0;
  console.log(this.age);

  setInterval(function growUp() {
    // 비엄격 모드에서, growUp() 함수는 `this`를
    // 전역 객체로 정의하고, 이는 Person() 생성자에
    // 정의된 `this`와 다름.
    this.age++;
    console.log(this);
  }, 1000);
}

var p = new Person();

// function test() {
//   this.name = 'test';
//   console.log(this);
// }
// test();
