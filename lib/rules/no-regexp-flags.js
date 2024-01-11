/**
 * @fileoverview Disable RegExp.prototype.flags
 * @author linsk1998
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
const { ESLintUtils } = require("@typescript-eslint/utils");
const isTypeGlobalType = require('../utils/isTypeGlobalType');
// const createRule = ESLintUtils.RuleCreator(
// 	name => `https://example.com/rule/${name}`,
// );

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem", // `problem`, `suggestion`, or `layout`
		docs: {
			description: "Disable RegExp.prototype.flags",
			recommended: false,
			url: null, // URL to the documentation page for this rule
		},
		fixable: null, // Or `code` or `whitespace`
		schema: [], // Add a schema if the rule has options
		messages: {
			noRegexpFlags: "RegExp.prototype.flags is not allow to use."
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
					property.name === "flags"
				) {
					const services = ESLintUtils.getParserServices(context);
					const type = services.getTypeAtLocation(node.object);
					if(isTypeGlobalType(type, 'RegExp', services)) {
						return context.report({ messageId: "noRegexpFlags", node });
					}
				}
			}
		};
	},
};
