# Disable standard event (`ts-compat/no-document-current-script.×`)

💼 This rule is enabled in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

Native `document.currentScript` is not compat. Should not use in business layer. Only use it on framework. In business use `import.meta.url`.

## Rule Details

Examples of **incorrect** code for this rule:

```ts
console.log(document.currentScript.src);
```

Examples of **correct** code for this rule:

```ts
console.log(import.meta.url);
```

## When Not To Use It

* Inject `document.currentScript` with polyfill.

## Further Reading

[can i use document.currentScript](https://caniuse.com/currentScript)
