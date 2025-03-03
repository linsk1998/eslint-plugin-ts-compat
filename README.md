# eslint-plugin-ts-compat

[![npm version](https://img.shields.io/npm/v/eslint-plugin-ts-compat.svg)](https://www.npmjs.com/package/eslint-plugin-ts-compat)
[![Build Status](https://github.com/linsk1998/eslint-plugin-ts-compat/workflows/CI/badge.svg)](https://github.com/linsk1998/eslint-plugin-ts-compat/actions)
[![License](https://img.shields.io/npm/l/eslint-plugin-ts-compat.svg)](https://github.com/linsk1998/eslint-plugin-ts-compat/blob/main/LICENSE)

This is a eslint-plugin to check browser compat base on TypeScript.

* You can ban some code even Babel and Polyfills could not solve.
* Use Typescript for type check.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-ts-compat`:

```sh
npm install eslint-plugin-ts-compat --save-dev
```

## Usage

Add `ts-compat` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": ["ts-compat"],
    "parser": "@typescript-eslint/parser",
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "ts-compat/no-regexp-flags": 2
    }
}
```

This plugin exports a recommended config that enforces good practices.

```json
{
    "extends": [
        "plugin:ts-compat/recommended"
    ]
}
```

Support a [browserslist](https://www.npmjs.com/package/browserslist) configuration to preset rules.

```json
{
    "extends": [
        "plugin:ts-compat/browserslist"
    ]
}
```

## Rules

<!-- begin auto-generated rules list -->

💼 Configurations enabled in.\
✅ Set in the `recommended` configuration.\
🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                                                   | Description                                                         | 💼 | 🔧 |
| :--------------------------------------------------------------------- | :------------------------------------------------------------------ | :- | :- |
| [no-class-list](docs/rules/no-class-list.md)                           | Disable classList                                                   | ✅  |    |
| [no-date-parse](docs/rules/no-date-parse.md)                           | Not allow parse date string.                                        | ✅  |    |
| [no-document-current-script](docs/rules/no-document-current-script.md) | Disable document.currentScript.                                     | ✅  |    |
| [no-event-listener](docs/rules/no-event-listener.md)                   | Disable standard event                                              | ✅  |    |
| [no-event-timestamp](docs/rules/no-event-timestamp.md)                 | Disable Event.prototype.timeStamp                                   |    |    |
| [no-function-length](docs/rules/no-function-length.md)                 | Disable Function.prototype.length                                   | ✅  |    |
| [no-function-name](docs/rules/no-function-name.md)                     | Disable Function.prototype.name                                     | ✅  |    |
| [no-regexp-flags](docs/rules/no-regexp-flags.md)                       | Disable RegExp.prototype.flags                                      | ✅  |    |
| [no-regexp-sticky](docs/rules/no-regexp-sticky.md)                     | Disable regexp sticky                                               | ✅  |    |
| [no-regexp-unicode](docs/rules/no-regexp-unicode.md)                   | Disable JavaScript built-in: RegExp: unicode                        | ✅  |    |
| [no-regexp-unicode-sets](docs/rules/no-regexp-unicode-sets.md)         | Disable JavaScript built-in: RegExp: unicodeSet                     | ✅  |    |
| [no-string-index](docs/rules/no-string-index.md)                       | Disable string index                                                | ✅  | 🔧 |
| [no-symbol](docs/rules/no-symbol.md)                                   | Disable Symbol factory function.                                    | ✅  |    |
| [no-timer-args-exceed](docs/rules/no-timer-args-exceed.md)             | Not allow using the third argument of `setTimeout` & `setInterval`. |    |    |
| [no-top-level-await](docs/rules/no-top-level-await.md)                 | Disable Top-Level await.                                            | ✅  |    |
| [prefer-immuable-url](docs/rules/prefer-immuable-url.md)               | Prefer immuable url                                                 | ✅  |    |
| [prefer-inner-text](docs/rules/prefer-inner-text.md)                   | Prefer .innerText                                                   | ✅  | 🔧 |
| [prefer-url-href](docs/rules/prefer-url-href.md)                       | Prefer url href.                                                    |    | 🔧 |
| [sealed-class](docs/rules/sealed-class.md)                             | Prefer sealed class                                                 |    |    |

<!-- end auto-generated rules list -->


