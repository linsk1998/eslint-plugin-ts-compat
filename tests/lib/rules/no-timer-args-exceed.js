/**
 * @fileoverview Not allow using the third argument of `setTimeout` & `setInterval`
 * @author linsk
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const path = require("path");
const { RuleTester } = require("@typescript-eslint/rule-tester");
const rule = require("../../../lib/rules/no-timer-args-exceed");
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

ruleTester.run("no-timer-args-exceed", rule, {
	valid: [
		{ code: `setTimeout(() => { console.log('Hello'); }, 1000);` },
		{ code: `function setTimeout(){}\nsetTimeout((msg) => { console.log(msg); }, 1000, 'Hello');` },
		{ code: `setInterval(() => { console.log('Hello'); }, 1000);` },
		{ code: `function setInterval(){}\nsetInterval((msg) => { console.log(msg); }, 1000, 'Hello');` }
	],
	invalid: [
		{
			code: `setTimeout((msg) => { console.log(msg); }, 1000, 'Hello');`,
			errors: 1,
		},
		{
			code: `setInterval((msg) => { console.log(msg); }, 1000, 'Hello');`,
			errors: 1,
		},
	]
});
