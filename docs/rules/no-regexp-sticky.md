# Disable regexp sticky (`ts-compat/no-regexp-sticky`)

💼 This rule is enabled in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

Please describe the origin of the rule here.

## Rule Details

This rule aims to...

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

Give a short description of when it would be appropriate to turn off this rule.

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
