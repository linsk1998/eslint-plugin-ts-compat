/**
 * @fileoverview Disable Symbol factory function.
 * @author linsk
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
const isShadowed = require('../utils/isShadowed');

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem", // `problem`, `suggestion`, or `layout`
		docs: {
			description: "Disable Symbol factory function.",
			recommended: true,
			url: null, // URL to the documentation page for this rule
		},
		fixable: null, // Or `code` or `whitespace`
		schema: [], // Add a schema if the rule has options
		messages: {
			noSymbol: "Symbol factory function is not allow to use."
		}
	},

	create(context) {
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
			CallExpression(node) {
				const { callee } = node;
				if(
					callee.type === "Identifier" &&
					callee.name === "Symbol"
				) {
					const currentScope = sourceCode.getScope(node);
					if(!isShadowed(currentScope, callee)) {
						return context.report({ messageId: "noSymbol", node: node });
					}
				}
			}
		};
	},
};
