# Prefer immuable url (`ts-compat/prefer-immuable-url`)

💼 This rule is enabled in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

Most URL Polyfills do not support url setter. Aviod setting property, make more compat.

## Rule Details

Examples of **incorrect** code for this rule:

```ts
var url = new URL(location.href);
url.hash = "#foo";
```

Examples of **correct** code for this rule:

```ts
var url = new URL(location.href);
url = new URL("#foo", url);
```

## When Not To Use It

Use URL Polyfill what support setter.

## Further Reading

[sky-core是一个处理浏览器兼容问题的polyfill库和工具库](https://www.npmjs.com/package/sky-core)
