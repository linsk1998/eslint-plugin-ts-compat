# Disable string index (`ts-compat/no-symbol`)

💼 This rule is enabled in the ✅ `recommended` config.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

Symbol cannot be perfectly polyfilled. Using it in older browsers comes with the following costs: every time a Symbol is created, a property is added to the prototype of Object; there is no guarantee that Symbol properties are non-enumerable. This rule prohibits the creation of custom Symbols but does not restrict the use of well-known Symbols. You might want to use private properties or WeakMap.

## Rule Details

Examples of **incorrect** code for this rule:

```ts
var s = Symbol();
```

Examples of **correct** code for this rule:

```ts
class Foo {
	[Symbol.hasInstance]() {
		return true;
	}
}
```

## When Not To Use It

Using Symbol in the architecture layer and considering unsupported scenarios.

## Further Reading

* [Private properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties)
* [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
