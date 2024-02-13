/**
 * @fileoverview Disable classList
 * @author linsk1998
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const path = require("path");
const { RuleTester } = require("@typescript-eslint/rule-tester");
const rule = require("../../../lib/rules/no-class-list");

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
ruleTester.run("no-class-list", rule, {
	valid: [
		{ code: `var el:HTMLElement; el.className="foo";` },
		{ code: `var el:any={}; el.classList.add("foo");` }
	],

	invalid: [
		{
			code: `var el: HTMLElement; el.classList.add("foo");`,
			errors: 1,
		}
	],
});
