var obj = {
	outer: function () {
		console.log(this);
		var innerFunc = () => {
			console.log(this);
		};
		innerFunc();
	},
};
obj.outer();

console.log('===========================');

var report = {
	sum: 0,
	count: 0,
	add: function () {
		var args = Array.prototype.slice.call(arguments);
		args.forEach(function (entry) {
			this.sum += entry;
			++this.count;
		}, this);
	},
	average: function () {
		return this.sum / this.count;
	},
};
report.add(60, 85, 95);
