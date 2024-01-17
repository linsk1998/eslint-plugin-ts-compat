# Disable regexp sticky (`ts-compat/no-regexp-sticky`)

💼 This rule is enabled in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

The sticky functionality of regular expressions cannot be transpiled by Babel, and it should be avoided.

## Rule Details

Examples of **incorrect** code for this rule:

```js
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
```

Examples of **correct** code for this rule:

```js
(/^.$/u).test('');

class RegExp {
	constructor(a, b) { }
	declare sticky;
};
var a = new RegExp('^foo', 'y');
a.sticky;
```

## When Not To Use It

Use RegExp polyfill.

## Further Reading

[can i use regexp sticky](https://caniuse.com/mdn-javascript_builtins_regexp_sticky)
