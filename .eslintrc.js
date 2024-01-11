"use strict";

module.exports = {
	root: true,
	overrides: [
		{
			plugins: ['@typescript-eslint', "ts-compat"],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				"project": "./docs/tsconfig.json",
				ecmaVersion: 2021,
				sourceType: 'module'
			},
			env: { mocha: true },
			files: ["docs/**/*.ts"],
			rules: {
				"ts-compat/no-regexp-flags": 2
			}
		},
		{
			extends: [
				"eslint:recommended",
				"plugin:eslint-plugin/recommended"
			],
			env: {
				node: true,
			},
			parserOptions: {
				"ecmaVersion": 2021
			},
			files: ["lib/**/*.js", "tests/**/*.js"]
		},
	],
};
