/**
 * @fileoverview Disable string index
 * @author linsk
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const path = require("path");
const { RuleTester } = require("@typescript-eslint/rule-tester");
const rule = require("../../../lib/rules/no-string-index");

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
ruleTester.run("no-string-index", rule, {
	valid: [
		// give me some code that won't trigger a warning
		{ code: `"1".at(0);` },
		{ code: `"1".charAt(0);` }
	],

	invalid: [
		{
			code: `"1"[0]`,
			output: `"1".at(0)`,
			errors: 1,
		}
	],
});
