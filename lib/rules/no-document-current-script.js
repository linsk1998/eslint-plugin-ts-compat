/**
 * @fileoverview Disable document.currentScript.
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
			description: "Disable document.currentScript.",
			recommended: true,
			url: null, // URL to the documentation page for this rule
		},
		fixable: null, // Or `code` or `whitespace`
		schema: [], // Add a schema if the rule has options
		messages: {
			noDocumentCurrentScript: "Disable document.currentScript."
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
			MemberExpression(node) {
				const { computed, property, object } = node;

				if(
					computed === false &&
					property.type === "Identifier" &&
					property.name === "currentScript"
				) {
					if(
						object.type === "Identifier" &&
						object.name === "document"
					) {
						const currentScope = sourceCode.getScope(node);
						if(!isShadowed(currentScope, object)) {
							return context.report({ messageId: "noDocumentCurrentScript", node: node });
						}
					}
				}
			}
		};
	},
};
