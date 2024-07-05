# Disable string index (`ts-compat/sealed-class`)

💼 This rule is enabled in the ✅ `recommended` config.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

For strict property check. For property accessor compat. Forbind extensible object properties.

## Rule Details

Examples of **incorrect** code for this rule:

```ts
class Cat {
	[key: string]: any;
}
```

Examples of **correct** code for this rule:

```ts
interface Foo {
	[key: string]: any;
}

class Bar {
	attrs: Map<string, any>;
}
```

## When Not To Use It

No compat property accessor.

## Further Reading

