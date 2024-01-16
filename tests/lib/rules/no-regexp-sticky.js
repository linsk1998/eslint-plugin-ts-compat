/**
 * @fileoverview Disable regexp sticky
 * @author linsk
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const path = require("path");
const { RuleTester } = require("@typescript-eslint/rule-tester");
const rule = require("../../../lib/rules/no-regexp-sticky");


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
ruleTester.run("no-regexp-sticky", rule, {
	valid: [
		{ code: `(/^.$/u).test('');` },
		{ code: `class RegExp{constructor(a, b) { } declare sticky;}; var a=new RegExp('^foo', 'y'); a.sticky;` }
	],

	invalid: [
		{
			code: "(/[a-z]/).sticky",
			errors: 1,
		},
		{
			code: `var a=new RegExp("hello", "g"); a.sticky;`,
			errors: 1,
		},
		{
			code: `class MyRegExp extends RegExp{}; var a=new MyRegExp("hello", "g"); a.sticky;`,
			errors: 1,
		},
		{
			code: "/^foo/y;",
			errors: 1,
		},
		{
			code: "new RegExp('^foo', 'y');",
			errors: 1,
		}
	],
});
