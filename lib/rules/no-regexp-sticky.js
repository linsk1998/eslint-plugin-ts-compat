/**
 * @fileoverview Disable regexp sticky
 * @author linsk
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
const { ESLintUtils } = require("@typescript-eslint/utils");
const isTypeGlobalType = require('../utils/isTypeGlobalType');
const isShadowed = require('../utils/isShadowed');

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem", // `problem`, `suggestion`, or `layout`
		docs: {
			description: "Disable regexp sticky",
			recommended: true,
			url: null, // URL to the documentation page for this rule
		},
		fixable: null, // Or `code` or `whitespace`
		schema: [], // Add a schema if the rule has options
		messages: {
			noRegexpSticky: "RegExp sticky is not allow to use."
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
				const { computed, property } = node;
				if(
					computed === false &&
					property.type === "Identifier" &&
					property.name === "sticky"
				) {
					const services = ESLintUtils.getParserServices(context);
					const type = services.getTypeAtLocation(node.object);
					if(isTypeGlobalType(type, 'RegExp', services)) {
						return context.report({ messageId: "noRegexpSticky", node: property });
					}
				}
			},
			Literal(node) {
				const { regex } = node;
				if(regex) {
					if(regex.flags.includes("y")) {
						return context.report({ messageId: "noRegexpSticky", node });
					}
				}
			},
			NewExpression(node) {
				const { callee, arguments: args } = node;
				if(
					callee.type === "Identifier" &&
					callee.name === "RegExp" &&
					args.length > 1
				) {
					var arg2 = args[1];
					if(
						arg2.type === "Literal" &&
						arg2.value.includes("y")
					) {
						const currentScope = sourceCode.getScope(node);
						if(!isShadowed(currentScope, callee)) {
							return context.report({ messageId: "noRegexpSticky", node: arg2 });
						}
					}
				}
			}
		};
	},
};
