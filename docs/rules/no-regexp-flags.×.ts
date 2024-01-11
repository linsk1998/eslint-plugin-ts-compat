var a: RegExp = /^.$/;
a.flags;

var b = new RegExp("hello", "g");
b.flags;

class MyRegExp extends RegExp { }
var c = new MyRegExp("hello", "g");
c.flags;