# eslint-plugin-ts-compat

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

| Name                                                     | Description                                  | 💼 | 🔧 |
| :------------------------------------------------------- | :------------------------------------------- | :- | :- |
| [no-function-name](docs/rules/no-function-name.md)       | Disable Function.prototype.name              | ✅  |    |
| [no-regexp-flags](docs/rules/no-regexp-flags.md)         | Disable RegExp.prototype.flags               | ✅  |    |
| [no-regexp-sticky](docs/rules/no-regexp-sticky.md)       | Disable regexp sticky                        | ✅  |    |
| [no-regexp-unicode](docs/rules/no-regexp-unicode.md)     | Disable JavaScript built-in: RegExp: unicode | ✅  |    |
| [no-string-index](docs/rules/no-string-index.md)         | Disable string index                         | ✅  | 🔧 |
| [prefer-immuable-url](docs/rules/prefer-immuable-url.md) | Prefer immuable url                          | ✅  |    |
| [prefer-inner-text](docs/rules/prefer-inner-text.md)     | Prefer .innerText                            | ✅  | 🔧 |

<!-- end auto-generated rules list -->


