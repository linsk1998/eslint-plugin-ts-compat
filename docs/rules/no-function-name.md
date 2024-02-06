# Disable Function.prototype.name (`ts-compat/no-function-name`)

💼 This rule is enabled in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

The name attribute of a function is often optimized by construction tools. Due to its limited use, using the babel plugin for compatibility comes at a high cost.

## Rule Details

Examples of **incorrect** code for this rule:

```ts
var a = () => 1;
a.name;

function b(){}
b.name;
```

Examples of **correct** code for this rule:

```ts
var a:any;
a.name;
```

## When Not To Use It

* Use safety build tool to keep Function `name`.
* Use `Function.prototype.name` polyfill.
* Use Babel plugin set `name` after function define.

## Further Reading

[can i use function name](https://caniuse.com/mdn-javascript_builtins_function_name)
