(/^.$/u).test('');

class RegExp {
	constructor(a, b) { }
	declare sticky;
};
var a = new RegExp('^foo', 'y');
a.sticky;
