const copyObject = function (obj) {
	const newObject = {};
	for (let key in obj) {
		newObject[key] = obj[key];
	}
	return newObject;
};

const copy = function (obj) {
	const newObj = {};
	for (let key in obj) {
		if (typeof obj[key] === 'object') {
			newObj[key] = copy(obj[key]);
		} else {
			newObj[key] = obj[key];
		}
	}
	return newObject;
};

const answer = function (target) {
	const result = {};
	if (typeof target === 'object' && target !== null) {
		for (let key in target) {
			result[key] = answer(target[key]);
		}
	} else {
		result = target;
	}
	return result;
};

var copyObjectViaJSON = function (target) {
	return JSON.parse(JSON.stringify(target));
};
