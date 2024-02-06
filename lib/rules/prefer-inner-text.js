/**
 * @fileoverview Prefer .innerText
 * @author linsk
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
const { ESLintUtils } = require("@typescript-eslint/utils");
const isTypeGlobalType = require('../utils/isTypeGlobalType');

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem", // `problem`, `suggestion`, or `layout`
		docs: {
			description: "Prefer .innerText",
			recommended: true,
			url: null, // URL to the documentation page for this rule
		},
		fixable: "code", // Or `code` or `whitespace`
		schema: [], // Add a schema if the rule has options
		messages: {
			preferInnerText: "Prefer .innerText"
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
					property.name === "textContent"
				) {
					const services = ESLintUtils.getParserServices(context);
					const type = services.getTypeAtLocation(node.object);
					if(isTypeGlobalType(type, 'Node', services)) {
						return context.report({
							node: property,
							messageId: "preferInnerText",
							fix: function(fixer) {
								return fixer.replaceTextRange(property.range, `innerText`);
							}
						});
					}
				}
			}
		};
	},
};
