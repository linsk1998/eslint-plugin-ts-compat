# Disable string index (`ts-compat/no-string-index`)

💼 This rule is enabled in the ✅ `recommended` config.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

💼 This rule is enabled in the ✅ `recommended` config.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

Old IE and Opera do not support string index notation, and it cannot use polyfills to provide compatibility with new features.

## Rule Details

Examples of **incorrect** code for this rule:

```js
"1"[0];

("1")['0'];

(`1`)[0];
```

Examples of **correct** code for this rule:

```js
"1".at(0);

"1".charAt(0);
```

## When Not To Use It

Read string mothed by notation.

## Further Reading

* [String.prototype.at()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/at)
* [String.prototype.charAt()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
