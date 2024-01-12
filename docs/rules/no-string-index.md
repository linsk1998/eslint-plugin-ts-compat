# Disable string index (`ts-compat/no-string-index`)

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

Please describe the origin of the rule here.

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
```

## When Not To Use It

Give a short description of when it would be appropriate to turn off this rule.

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
