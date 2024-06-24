/**
 * @fileoverview Disable Top-Level await
 * @author linsk
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem", // `problem`, `suggestion`, or `layout`
		docs: {
			description: "Disable Top-Level await.",
			recommended: true,
			url: null, // URL to the documentation page for this rule
		},
		fixable: null, // Or `code` or `whitespace`
		schema: [], // Add a schema if the rule has options
		messages: {
			noTopLevelAwait: "Top-Level await is not allow to use."
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
			AwaitExpression(node) {
				let expressionStatement = node.parent;
				if(expressionStatement.type === "ExpressionStatement") {
					let program = expressionStatement.parent;
					if(program.type === "Program") {
						return context.report({
							messageId: "noTopLevelAwait",
							node: node
						});
					}
				}
			}
		};
	},
};
