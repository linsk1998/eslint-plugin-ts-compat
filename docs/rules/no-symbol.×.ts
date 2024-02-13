var s = Symbol();

class Foo {
	[Symbol.hasInstance]() {
		return true;
	}
}
