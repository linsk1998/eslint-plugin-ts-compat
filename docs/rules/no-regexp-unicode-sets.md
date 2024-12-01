# Disable JavaScript built-in: RegExp: unicodeSet (`ts-compat/no-regexp-unicode-sets`)

💼 This rule is enabled in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

The "`v`" modifier in regular expressions is a new feature added in ES2024, which is to use Unicode Sets. When creating regular expressions using the "new" keyword and the "`v`" modifier, it cannot be transpiled by Babel. When Babel transpiles expressions with the "`v`" modifier, it cannot correctly access the "`unicodeSets`" and "`flags`" attributes.

## Rule Details

Examples of **incorrect** code for this rule:

```ts
var a = /^.$/;
a.unicodeSets;

var b = new RegExp("hello", "g");
b.unicodeSets;

class MyRegExp extends RegExp { }
var c = new MyRegExp("hello", "g");
c.unicodeSets;

/^.$/v;

new RegExp('^.$', 'v');
```

Examples of **correct** code for this rule:

```ts
(/^.$/).test('');

class RegExp {
	constructor(a, b) { }
	declare unicodeSets;
};
var a = new RegExp('^foo', 'v');
a.unicodeSets;
```

## When Not To Use It

* Transpiles expressions with the "`v`" modifier to "new" keyword and the "`v`" modifier.
* Use RegExp polyfill.

## Further Reading

[ES2024 正则表达式新特性 unicodeSets 解析及兼容方案](https://my.oschina.net/linsk1998/blog/16571848)
