/**
 * @fileoverview Disable Symbol factory function.
 * @author linsk
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const path = require("path");
const { RuleTester } = require("@typescript-eslint/rule-tester");
const rule = require("../../../lib/rules/no-symbol");
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
ruleTester.run("no-symbol", rule, {
	valid: [
		{ code: `Symbol.hasInstance;` }
	],

	invalid: [
		{
			code: `var s = Symbol();`,
			errors: 1,
		}
	],
});
