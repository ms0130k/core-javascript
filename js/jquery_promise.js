
//1
const p1 = function () {
    return $.ajax({
		url :"/article/1059426",
		type: 'get',
		dataType: 'html',
		success : function (data) {
		    console.log('p1');
		},
    });
};

const p2 = function () {
	return $.ajax({
		url :"/articles/tech",
		type: 'get',
		dataType: 'html',
		success : function (data) {
		    console.log('p2');
		},
	});
};

const p3 = function () {
    return $.ajax({
		url :"/articles/community",
		type: 'get',
		dataType: 'html',
		success : function (data) {
			console.log('p3');
		},
    });
};
$.when(p1, p2, p3).done(console.log);

//2
const p1 = $.ajax({
	url :"/article/1059426",
	type: 'get',
	dataType: 'html',
	success : function (data) {
		console.log('p1')
	},
});
	
const p2 = $.ajax({
	url :"/articles/tech",
	type: 'get',
	dataType: 'html',
	success : function (data) {
		console.log(p2);
	},
});
	
const p3 = $.ajax({
	url :"/articles/community",
	type: 'get',
	dataType: 'html',
	success : function (data) {
		console.log(p3);
	},
});

		
$.when(p1, p2, p3).done(console.log);
