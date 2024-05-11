# Disable Function.prototype.name (`ts-compat/no-function-name`)

💼 This rule is enabled in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

The length attribute of a function is diffrent from browsers.

## Rule Details

Examples of **incorrect** code for this rule:

```ts
var a = () => 1;
a.length;

function b(){}
b.length;
```

Examples of **correct** code for this rule:

```ts
var a:any;
a.length;
```

## When Not To Use It

* Use new browsers.

## Further Reading

[can i use function length](https://caniuse.com/mdn-javascript_builtins_function_length)
