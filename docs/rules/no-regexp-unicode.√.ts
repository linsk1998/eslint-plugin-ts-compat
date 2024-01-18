(/^.$/).test('');

class RegExp {
	constructor(a, b) { }
	declare unicode;
};
var a = new RegExp('^foo', 'u');
a.unicode;
