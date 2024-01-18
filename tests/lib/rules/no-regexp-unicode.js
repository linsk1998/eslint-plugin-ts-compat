/**
 * @fileoverview Disable JavaScript built-in: RegExp: unicode
 * @author linsk
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const path = require("path");
const { RuleTester } = require("@typescript-eslint/rule-tester");
const rule = require("../../../lib/rules/no-regexp-unicode");
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
ruleTester.run("no-regexp-unicode", rule, {
	valid: [
		{ code: `(/^.$/).test('');` },
		{ code: `class RegExp{constructor(a, b) { } declare unicode;}; var a=new RegExp('^foo', 'u'); a.unicode;` }
	],

	invalid: [
		{
			code: `var a = /^.$/;a.unicode;`,
			errors: 1,
		},
		{
			code: `var b = new RegExp("hello", "g");b.unicode;`,
			errors: 1,
		},
		{
			code: `class MyRegExp extends RegExp { }var c = new MyRegExp("hello", "g");c.unicode;`,
			errors: 1,
		},
		{
			code: `/^.$/u`,
			errors: 1,
		},
		{
			code: `new RegExp('^.$', 'u');`,
			errors: 1,
		}
	],
});
