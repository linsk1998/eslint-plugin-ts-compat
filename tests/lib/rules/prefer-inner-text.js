/**
 * @fileoverview prefer .innerText
 * @author linsk
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const path = require("path");
const { RuleTester } = require("@typescript-eslint/rule-tester");
const rule = require("../../../lib/rules/prefer-inner-text");
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
ruleTester.run("prefer-inner-text", rule, {
	valid: [
		{ code: `var a: HTMLElement; a.innerText;` }
	],

	invalid: [
		{
			code: `var b: HTMLElement; b.textContent;`,
			output: `var b: HTMLElement; b.innerText;`,
			errors: 1,
		}
	],
});
