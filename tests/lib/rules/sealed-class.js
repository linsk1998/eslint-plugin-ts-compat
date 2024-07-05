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
const rule = require("../../../lib/rules/sealed-class");

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
ruleTester.run("sealed-class", rule, {
	valid: [
		// give me some code that won't trigger a warning
		{ code: `interface Foo { [key: string]: any;}` },
		{ code: `class Bar { attrs: Map<string, any>;}` }
	],

	invalid: [
		{
			code: `class Cat { [key: string]: any;}`,
			errors: 1,
		}
	],
});
