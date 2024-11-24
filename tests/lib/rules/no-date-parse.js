/**
 * @fileoverview Not allow parse date string
 * @author linsk
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const path = require("path");
const { RuleTester } = require("@typescript-eslint/rule-tester");
const rule = require("../../../lib/rules/no-date-parse");

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
ruleTester.run("no-date-parse", rule, {
	valid: [
		// give me some code that won't trigger a warning
		{ code: `new Date()` },
		{ code: `new Date(0)` },
		{
			code: `new Date("" as any)`,
			options: [{ allowAny: true }],
		},
	],

	invalid: [
		{
			code: `new Date("")`,
			errors: 1,
		},
		{
			code: `new Date("" as any)`,
			errors: 1,
		},
		{
			code: `Date.parse("")`,
			errors: 1,
		}
	],
});
