var obj = {
	outer: function () {
		console.log(this);
		var innerFunc = function () {
			console.log(this);
		};
		innerFunc.call(this);
	},
};
obj.outer();

console.log('=================');

var obj = {
	outer: function () {
		console.log(this);
		var innerFunc = function () {
			console.log(this);
		};
		innerFunc();
	},
};
obj.outer();
