/**
 * @fileoverview Not allow using the third argument of `setTimeout` & `setInterval`
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
			description: "Not allow using the third argument of `setTimeout` & `setInterval`.",
			recommended: false,
			url: null, // URL to the documentation page for this rule
		},
		fixable: null, // Or `code` or `whitespace`
		schema: [], // Add a schema if the rule has options
		messages: {
			setTimeoutArgsExceed: "Not allow using the third argument of `setTimeout`.",
			setIntervalArgsExceed: "Not allow using the third argument of `setInterval`."
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
				if(callee.type === "Identifier") {
					let calleeName = callee.name;
					if(calleeName === "setTimeout" || calleeName === "setInterval") {
						const currentScope = sourceCode.getScope(node);
						if(!isShadowed(currentScope, callee)) {
							if(node.arguments.length > 2) {
								return context.report({ messageId: calleeName + "ArgsExceed", node: node.arguments[2] });
							}
						}
					}
				}
			}
		};
	},
};
