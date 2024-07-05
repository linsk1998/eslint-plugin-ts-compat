# Prefer sealed class (`ts-compat/sealed-class`)

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

[can i use defineProperty](https://caniuse.com/mdn-javascript_builtins_object_defineproperty)
