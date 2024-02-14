/**
 * @fileoverview Disable standard event
 * @author linsk1998
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const path = require("path");
const { RuleTester } = require("@typescript-eslint/rule-tester");
const rule = require("../../../lib/rules/no-event-listener");

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
		{ code: `var el: HTMLDivElement; var handle: () => any; el.onclick = handle;` },
		{ code: `import $ from "jquery"; var el: HTMLDivElement; var handle: () => any; $(el).on('click', handle);` },
		{ code: `import { attachEvent } from "sky-core"; var el: HTMLDivElement; var handle: () => any; attachEvent(el, 'click', handle);` }
	],

	invalid: [
		{
			code: `var el: HTMLDivElement; var handle: () => any; el.addEventListener('click', handle);`,
			errors: 1,
		},
		{
			code: `var el: HTMLDivElement; var handle: () => any; el.removeEventListener('click', handle);`,
			errors: 1,
		},
		{
			code: `var el: HTMLDivElement; el.dispatchEvent(new Event('click'));`,
			errors: 1,
		},
		{
			code: `var el: HTMLDivElement; var handle: () => any; window.addEventListener('click', handle);`,
			errors: 1,
		},
		{
			code: `var el: HTMLDivElement; var handle: () => any; document.addEventListener('click', handle);`,
			errors: 1,
		}
	],
});
