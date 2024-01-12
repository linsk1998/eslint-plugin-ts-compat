/**
 * @fileoverview Disable string index
 * @author linsk
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
const { ESLintUtils } = require("@typescript-eslint/utils");
const isStringType = require('../utils/isStringType');

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem", // `problem`, `suggestion`, or `layout`
		docs: {
			description: "Disable string index",
			recommended: true,
			url: null, // URL to the documentation page for this rule
		},
		fixable: "code", // Or `code` or `whitespace`
		schema: [], // Add a schema if the rule has options
		messages: {
			noStringIndex: "String index is not allow to use. And instead use the `at` method."
		}
	},

	create(context) {
		// variables should be defined here

		//----------------------------------------------------------------------
		// Helpers
		//----------------------------------------------------------------------

		// any helper functions should go here or else delete this section

		//----------------------------------------------------------------------
		// Public
		//----------------------------------------------------------------------

		return {
			MemberExpression(node) {
				const { computed, property } = node;

				if(computed === true) {
					const services = ESLintUtils.getParserServices(context);
					const type = services.getTypeAtLocation(node.object);
					if(isStringType(type, services)) {
						const sourceCode = context.sourceCode;
						return context.report({
							node,
							messageId: "noStringIndex",
							fix: function(fixer) {
								const textRange = [
									property.range[0] - 1,
									property.range[1] + 1,
								];
								const textBetween = sourceCode.text.slice(
									property.range[0],
									property.range[1],
								);
								return fixer.replaceTextRange(textRange, `.at(${textBetween})`);
							}
						});
					}
				}
			}
		};
	},
};
