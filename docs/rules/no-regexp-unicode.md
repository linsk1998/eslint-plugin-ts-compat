# Disable JavaScript built-in: RegExp: unicode (`ts-compat/no-regexp-unicode`)

💼 This rule is enabled in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

💼 This rule is enabled in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

The "`u`" modifier in regular expressions is a new feature added in ES6, which is used to correctly handle Unicode characters greater than \uFFFF. When creating regular expressions using the "new" keyword and the "`u`" modifier, it cannot be transpiled by Babel. When Babel transpiles expressions with the "`u`" modifier, it cannot correctly access the "`unicode`" and "`flags`" attributes.

## Rule Details

Examples of **incorrect** code for this rule:

```js
var a = /^.$/;
a.unicode;

var b = new RegExp("hello", "g");
b.unicode;

class MyRegExp extends RegExp { }
var c = new MyRegExp("hello", "g");
c.unicode;

/^.$/u;

new RegExp('^.$', 'u');
```

Examples of **correct** code for this rule:

```js
(/^.$/).test('');

class RegExp {
	constructor(a, b) { }
	declare unicode;
};
var a = new RegExp('^foo', 'u');
a.unicode;
```

## When Not To Use It

Use RegExp polyfill.

## Further Reading

[正则表达式 unicode 修饰符及兼容性](https://my.oschina.net/linsk1998/blog/10884764)
