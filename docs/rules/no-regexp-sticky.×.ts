(/^.$/).sticky;

var a: RegExp = /^.$/;
a.sticky;

var b = new RegExp("hello", "g");
b.sticky;

class MyRegExp extends RegExp { }
var c = new MyRegExp("hello", "g");
c.sticky;

/^foo/y;

new RegExp('^foo', 'y');