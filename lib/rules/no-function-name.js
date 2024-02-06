/**
 * @fileoverview Disable Function.prototype.name
 * @author linsk1998
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
const { ESLintUtils } = require("@typescript-eslint/utils");
const isFunctionType = require('../utils/isFunctionType');

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem", // `problem`, `suggestion`, or `layout`
		docs: {
			description: "Disable Function.prototype.name",
			recommended: true,
			url: null, // URL to the documentation page for this rule
		},
		fixable: null, // Or `code` or `whitespace`
		schema: [], // Add a schema if the rule has options
		messages: {
			noFunctionName: "Function.prototype.name is not allow to use."
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

				if(
					computed === false &&
					property.type === "Identifier" &&
					property.name === "name"
				) {
					const services = ESLintUtils.getParserServices(context);
					const type = services.getTypeAtLocation(node.object);
					if(isFunctionType(type, services)) {
						return context.report({ messageId: "noFunctionName", node: property });
					}
				}
			}
		};
	},
};
