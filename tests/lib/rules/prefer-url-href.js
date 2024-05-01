/**
 * @fileoverview Prefer url href
 * @author linsk
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const path = require("path");
const { RuleTester } = require("@typescript-eslint/rule-tester");
const rule = require("../../../lib/rules/prefer-url-href");
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
ruleTester.run("prefer-url-href", rule, {
	valid: [
		{ code: `var url = new URL(location.href); url.href;` }
	],

	invalid: [
		{
			code: `var url = new URL(location.href); String(url);`,
			output: `var url = new URL(location.href); url.href;`,
			errors: 1,
		},
		{
			code: 'var url = new URL(location.href); `${url}`;',
			output: 'var url = new URL(location.href); `${url.href}`;',
			errors: 1,
		},
		{
			code: `var url = new URL(location.href); "" + url;`,
			output: `var url = new URL(location.href); "" + url.href;`,
			errors: 1,
		}
	],
});
