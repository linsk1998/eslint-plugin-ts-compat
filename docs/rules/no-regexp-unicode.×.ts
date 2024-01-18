var a = /^.$/;
a.unicode;

var b = new RegExp("hello", "g");
b.unicode;

class MyRegExp extends RegExp { }
var c = new MyRegExp("hello", "g");
c.unicode;

/^.$/u;

new RegExp('^.$', 'u');