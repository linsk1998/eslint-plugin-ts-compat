/**
 * @fileoverview Disable Function.prototype.name
 * @author linsk1998
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const path = require("path");
const { RuleTester } = require("@typescript-eslint/rule-tester");
const rule = require("../../../lib/rules/no-function-name");

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
ruleTester.run("no-function-name", rule, {
	valid: [
		{ code: `(/^.$/u).test('');` },
		{ code: `class RegExp{declare flags;}; var a=new RegExp(); a.flags;` }
	],

	invalid: [
		// {
		// 	code: `var a = () => 1; a.name;`,
		// 	errors: 1,
		// },
		// {
		// 	code: `var b: Function; b.name;`,
		// 	errors: 1,
		// }
	],
});
