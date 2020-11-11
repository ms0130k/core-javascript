/*
사실 call/apply를 이용해 형변환하는 것은 'this를 원하는 값으로 지정해서 호출한다'라는 본래 의도와 다소 동떨어진 활용법. slice 메서드는 오직 배열 형태로 (얕은)'복사'하기 위해 차용, 코드 정확히 모르면 의도 파악 쉽지 않음. ES6에서는 array-like objects 또는 순회 가능한 모든 종류 데이터 타입을 배열로 전환하는 Array.from 메서드를 새로 도입
*/

var obj = {
	0: 'a',
	1: 'b',
	3: 'c',
	5: 'd',
	length: 4,
};
var arr = Array.from(obj);
console.log(arr);
arr[5] = 'f';
arr[9] = 'e';
console.log(arr);

/*
생성자 내부에서 다른 생성자 호출
생성자 내부에서 다른 생성자와 공통된 내용이 있을 경우 call 또는 apply를 이용해 다른 생성자를 호출하면 반복 제거 가능
*/
function Person(name, gender) {
	this.name = name;
	this.gender = gender;
}

function Student(name, gender, school) {
	Person.call(this, name, gender);
	this.school = school;
}
function Employee(name, gender, company) {
	Person.apply(this, [name, gender]);
	this.company = company;
}
var by = new Student('보영', 'female', '단국대');
var jn = new Employee('재난', 'male', '구골');
console.log(by);
console.log(jn);
