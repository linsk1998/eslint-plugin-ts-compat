/**
 * @fileoverview Not allow parse date string.
 * @author linsk
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
const { ESLintUtils } = require("@typescript-eslint/utils");
const { isTypeAnyType } = require("@typescript-eslint/type-utils");
const isShadowed = require('../utils/isShadowed');
const isNumberType = require('../utils/isNumberType');

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem", // `problem`, `suggestion`, or `layout`
		docs: {
			description: "Not allow parse date string.",
			recommended: true,
			url: null, // URL to the documentation page for this rule
		},
		fixable: null, // Or `code` or `whitespace`
		schema: [
			{
				type: 'object',
				additionalProperties: false,
				properties: {
					allowAny: {
						type: 'boolean',
						description: 'Whether to allow `any` typed values.',
					}
				}
			}
		], // Add a schema if the rule has options
		messages: {
			noDateParse: "`Date.parse` is not allow to use.",
			timestampShouldBeNumber: "`new Date(timestamp)` the argument timestamp should be number.",
			yearShouldBeNumber: "`new Date(year, month, day, hours, minutes, seconds, milliseconds)` the argument year should be number."
		}
	},
	create(context) {
		let { allowAny } = context.options[0] || {};
		console.log(allowAny);
		// variables should be defined here
		const sourceCode = context.sourceCode;
		//----------------------------------------------------------------------
		// Helpers
		//----------------------------------------------------------------------

		// any helper functions should go here or else delete this section

		//----------------------------------------------------------------------
		// Public
		//----------------------------------------------------------------------

		return {
			MemberExpression(node) {
				const { computed, property, object } = node;
				if(
					computed === false &&
					property.type === "Identifier" &&
					property.name === "parse"
				) {
					if(
						object.type === "Identifier" &&
						object.name === "Date"
					) {
						const currentScope = sourceCode.getScope(node);
						if(!isShadowed(currentScope, object)) {
							return context.report({ messageId: "noDateParse", node: node });
						}
					}
				}
			},
			NewExpression(node) {
				const { callee, arguments: args } = node;
				if(
					callee.type === "Identifier" &&
					callee.name === "Date" &&
					args.length > 0
				) {
					const currentScope = sourceCode.getScope(node);
					if(!isShadowed(currentScope, callee)) {
						var arg1 = args[0];
						const services = ESLintUtils.getParserServices(context);
						const type = services.getTypeAtLocation(arg1);
						if(allowAny ? !isTypeAnyType(type) : !isNumberType(type)) {
							if(args.length > 1) {
								return context.report({ messageId: "yearShouldBeNumber", node: arg1 });
							} else {
								return context.report({ messageId: "timestampShouldBeNumber", node: arg1 });
							}
						}
					}
				}
			}
		};
	},
};
