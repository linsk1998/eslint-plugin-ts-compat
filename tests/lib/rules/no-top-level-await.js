/**
 * @fileoverview Disable top-level await
 * @author linsk
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const path = require("path");
const { RuleTester } = require("@typescript-eslint/rule-tester");
const rule = require("../../../lib/rules/no-top-level-await");

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
ruleTester.run("no-top-level-await", rule, {
	valid: [
		// give me some code that won't trigger a warning
		{ code: `Promise.resolve().then(()=>{})` },
		{ code: `async function aaa() { await Promise.resolve() }` }
	],

	invalid: [
		{
			code: `await Promise.resolve()`,
			errors: 1,
		}
	],
});
