"use strict";

module.exports = {
	root: true,
	overrides: [
		{
			plugins: ['@typescript-eslint', "ts-compat"],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				project: "./docs/tsconfig.json",
				ecmaVersion: 2021,
				sourceType: 'module'
			},
			files: ["docs/**/*.ts"],
			extends: [
				"plugin:ts-compat/recommended"
			],
			rules: {
				"ts-compat/no-event-timestamp": 2,
				"ts-compat/sealed-class": 2
			}
		},
		{
			extends: [
				"eslint:recommended",
				"plugin:eslint-plugin/recommended"
			],
			env: {
				node: true,
				mocha: true
			},
			parserOptions: {
				"ecmaVersion": 2021
			},
			files: ["lib/**/*.js", "tests/**/*.js"]
		},
	],
};
