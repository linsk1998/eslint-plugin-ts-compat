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
    plugins: ["ts-compat"],
    parser: "@typescript-eslint/parser",
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

| Name                                             | Description                    |
| :----------------------------------------------- | :----------------------------- |
| [no-regexp-flags](docs/rules/no-regexp-flags.md) | Disable RegExp.prototype.flags |
| [no-string-index](docs/rules/no-string-index.md) | Disable Disable string index   |

<!-- end auto-generated rules list -->


