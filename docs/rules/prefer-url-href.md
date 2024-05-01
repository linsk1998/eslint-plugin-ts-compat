# Prefer url href (`ts-compat/prefer-url-href`)

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

Polyfill URL by VBScript will support url setter. But not support implicit coercion to string. If you want to set url property, you should aviod implicit coercion to string.

## Rule Details

Examples of **incorrect** code for this rule:

```ts
var url = new URL(location.href);
String(url);

`${url}`;

"" + url;
```

Examples of **correct** code for this rule:

```ts
var url = new URL(location.href);
url.href;

`${url.href}`;

"" + url.href;
```

## When Not To Use It

Aviod setting property.

## Further Reading

[prefer-immuable-url](https://github.com/linsk1998/eslint-plugin-ts-compat/blob/HEAD/docs/rules/prefer-immuable-url.md)
