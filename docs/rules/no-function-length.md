# Disable Function.prototype.length (`ts-compat/no-function-length`)

💼 This rule is enabled in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

The length property of native function is diffrent from browsers.

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

* Use for custom function.
