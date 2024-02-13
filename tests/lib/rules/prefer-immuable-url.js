/**
 * @fileoverview Prefer immuable url
 * @author linsk
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const path = require("path");
const { RuleTester } = require("@typescript-eslint/rule-tester");
const rule = require("../../../lib/rules/prefer-immuable-url");
//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
const ruleTester = new RuleTester({
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		tsconfigRootDir: path.resolve(process.cwd(), "./tests"),
	},
});
ruleTester.run("prefer-immuable-url", rule, {
	valid: [
		{ code: `var url = new URL(location.href); var foo = url.hash;` }
	],

	invalid: [
		{
			code: `var url = new URL(location.href); url.hash = "#foo";`,
			errors: 1,
		},
		{
			code: `var url = new URL(location.href); Object.assign(url, {});`,
			errors: 1,
		}
	],
});
