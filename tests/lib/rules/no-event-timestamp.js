/**
 * @fileoverview Disable Event.prototype.timeStamp
 * @author linsk1998
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const path = require("path");
const { RuleTester } = require("@typescript-eslint/rule-tester");
const rule = require("../../../lib/rules/no-event-timestamp");

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
		{ code: `var e:any; e.timeStamp;` }
	],

	invalid: [
		{
			code: `var e: MouseEvent; e.timeStamp;`,
			errors: 1,
		}
	],
});
