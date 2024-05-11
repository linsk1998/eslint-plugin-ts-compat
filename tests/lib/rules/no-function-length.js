/**
 * @fileoverview Disable Function.prototype.length
 * @author linsk1998
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const path = require("path");
const { RuleTester } = require("@typescript-eslint/rule-tester");
const rule = require("../../../lib/rules/no-function-length");

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
ruleTester.run("no-function-length", rule, {
	valid: [
		{ code: `var a:any; a.length;` },
		{ code: `class Foo{}; Foo.length;` }
	],

	invalid: [
		{
			code: `var a = () => 1; a.length;`,
			errors: 1,
		},
		{
			code: `var b: Function; b.length;`,
			errors: 1,
		}
	],
});
