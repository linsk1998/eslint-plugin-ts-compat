/**
 * @fileoverview Disable RegExp.prototype.flags
 * @author linsk1998
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const path = require("path");
const { RuleTester } = require("@typescript-eslint/rule-tester");
const rule = require("../../../lib/rules/no-regexp-flags");

RuleTester.afterAll = require("mocha").after;

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
ruleTester.run("no-regexp-flags", rule, {
	valid: [
		{
			code: `(/^.$/u).test('');`,
			errors: [{ message: "test property can use." }],
		},
		{
			code: `class RegExp{declare flags;}; var a=new RegExp(); a.flags;`,
			errors: [{ message: "test property can use." }],
		}
	],

	invalid: [
		{
			code: `var a:RegExp=/^.$/; a.flags;`,
			errors: 1,
		},
		{
			code: `var a=new RegExp("hello", "g"); a.flags;`,
			errors: 1,
		},
		{
			code: `class MyRegExp extends RegExp{}; var a=new MyRegExp("hello", "g"); a.flags;`,
			errors: 1,
		}
	],
});
