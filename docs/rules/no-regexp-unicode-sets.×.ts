var a = /^.$/;
a.unicodeSets;

var b = new RegExp("hello", "g");
b.unicodeSets;

class MyRegExp extends RegExp { }
var c = new MyRegExp("hello", "g");
c.unicodeSets;

/^.$/v;

new RegExp('^.$', 'v');
