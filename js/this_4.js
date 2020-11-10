/*
콜백 함수의 정의와 동작 원리 등에 대해서는 바로 다음 장에서 자세히 다룹니다. 여기서는 this가 어떤 값을 참조하는지만 간단히 확인하고 넘어가겠습니다. 함수 A의 제어권을 다른 함수(또는 메서드) B에게 넘겨주는 경우 함수 A를 콜백 함수라 합니다. 이때 함수 A는 함수B의 내부 로직에 따라 실행되며, this 역시 함수 B 내부로직에서 정한 규칙에 따라 값이 결정. 콜백 함수도 함수, 기본적으로 this가 전역객체 참조. 제어권 받은 함수에서 콜백함수에 별도로 this 대상 지정할 경우 그 대상 참조
*/
setTimeout(() => {
  console.log(this);
}, 300);

[1, 2, 3, 4, 5].forEach((x, i) => {
  console.log('i:', i, this, x);
});

document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector('#a').addEventListener('click', function (e) {
  console.log(this, e);
});

var test = function test() {
  console.log('test:', this);
};
test();
new test();
var a = new test();
var t = new test();

console.log(a == t);
console.log(a === t);
