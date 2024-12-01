/**
 * @fileoverview Disable JavaScript built-in: RegExp: unicodeSets
 * @author linsk
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const path = require("path");
const { RuleTester } = require("@typescript-eslint/rule-tester");
const rule = require("../../../lib/rules/no-regexp-unicode-sets");
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
ruleTester.run("no-regexp-unicode-sets", rule, {
	valid: [
		{ code: `(/^.$/).test('');` },
		{ code: `class RegExp{constructor(a, b) { } declare unicodeSets;}; var a=new RegExp('^foo', 'u'); a.unicodeSets;` }
	],

	invalid: [
		{
			code: `var a = /^.$/;a.unicodeSets;`,
			errors: 1,
		},
		{
			code: `var b = new RegExp("hello", "g");b.unicodeSets;`,
			errors: 1,
		},
		{
			code: `class MyRegExp extends RegExp { }var c = new MyRegExp("hello", "g");c.unicodeSets;`,
			errors: 1,
		},
		{
			code: `/^.$/v`,
			errors: 1,
		},
		{
			code: `new RegExp('^.$', 'v');`,
			errors: 1,
		}
	],
});
