class Student {
	constructor(name, age, enrolled, score) {
		this.name = name;
		this.age = age;
		this.enrolled = enrolled;
		this.score = score;
	}
}

const students = [
	new Student('A', 20, true, 'c'),
	new Student('B', 28, false, 'a'),
	new Student('C', 30, true, 'b'),
];

console.log(students);

const result = students.reduce((prev, curr) => prev + curr.score, 0);
console.log(result);

console.clear();

console.log(students.map((student) => student.score).toString());
console.log(students.map((student) => student.score).join(' and '));
console.log(
	students.map((student) => student.score).join(',') ===
		students.map((student) => student.score).toString()
);
console.clear();

console.log(
	students
		.map((student) => student.score)
		.sort()
		.reverse()
		.join(',')
);
