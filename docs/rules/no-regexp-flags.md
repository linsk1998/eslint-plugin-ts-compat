# Disable RegExp.prototype.flags (`ts-compat/no-regexp-flags`)

💼 This rule is enabled in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

💼 This rule is enabled in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

When we use Babel to transform js. RegExp flags could be change. This rule can avoid the differences caused by it.

## Rule Details

Examples of **incorrect** code for this rule:

```js
var a: RegExp = /^.$/;
a.flags;

var b = new RegExp("hello", "g");
b.flags;

class MyRegExp extends RegExp { }
var c = new MyRegExp("hello", "g");
c.flags;
```

Examples of **correct** code for this rule:

```js
(/^.$/u).test('');

class RegExp {
	declare flags;
};
var a = new RegExp();
a.flags;
```

## When Not To Use It

* When Babel translation is not required in the project.
* Using the Polyfill version of the RegExp class, And use Babel to transpile the newfangled regular expressions into the new syntax.

## Further Reading

* [babel-plugin-transform-unicode-regex](https://babeljs.io/docs/babel-plugin-transform-unicode-regex)
* [babel-plugin-transform-dotall-regex](https://babeljs.io/docs/babel-plugin-transform-dotall-regex)
* [babel-plugin-transform-unicode-sets-regex](https://babeljs.io/docs/babel-plugin-transform-unicode-sets-regex)
