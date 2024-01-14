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

## Rules

<!-- begin auto-generated rules list -->

💼 Configurations enabled in.\
✅ Set in the `recommended` configuration.\
🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                             | Description                    | 💼 | 🔧 |
| :----------------------------------------------- | :----------------------------- | :- | :- |
| [no-regexp-flags](docs/rules/no-regexp-flags.md) | Disable RegExp.prototype.flags | ✅  |    |
| [no-string-index](docs/rules/no-string-index.md) | Disable string index           | ✅  | 🔧 |

<!-- end auto-generated rules list -->


