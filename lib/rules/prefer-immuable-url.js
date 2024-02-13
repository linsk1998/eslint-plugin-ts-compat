/**
 * @fileoverview Prefer immuable url
 * @author linsk
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
const { ESLintUtils } = require("@typescript-eslint/utils");
const isShadowed = require('../utils/isShadowed');
const isTypeGlobalType = require('../utils/isTypeGlobalType');

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem", // `problem`, `suggestion`, or `layout`
		docs: {
			description: "Prefer immuable url",
			recommended: true,
			url: null, // URL to the documentation page for this rule
		},
		fixable: null, // Or `code` or `whitespace`
		schema: [], // Add a schema if the rule has options
		messages: {
			preferImmuableUrl: "Prefer immuable url"
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
			AssignmentExpression(node) {
				const { left } = node;
				if(left.type === "MemberExpression") {
					const { property, computed } = left;
					if(
						computed === false &&
						property.type === "Identifier"
					) {
						const services = ESLintUtils.getParserServices(context);
						const type = services.getTypeAtLocation(left.object);
						if(isTypeGlobalType(type, 'URL', services)) {
							return context.report({
								node: property,
								messageId: "preferImmuableUrl"
							});
						}
					}
				}
			},
			CallExpression(node) {
				const { callee, arguments: args } = node;
				if(callee.type === "MemberExpression" && args.length >= 2) {
					const { object, property } = callee;
					if(
						object.type === "Identifier" &&
						object.name === "Object" &&
						property.type === "Identifier" &&
						property.name === "assign"
					) {
						const currentScope = sourceCode.getScope(object);
						if(!isShadowed(currentScope, callee)) {
							const services = ESLintUtils.getParserServices(context);
							const arg1 = args[0];
							const type = services.getTypeAtLocation(arg1);
							if(isTypeGlobalType(type, 'URL', services)) {
								return context.report({
									node: arg1,
									messageId: "preferImmuableUrl"
								});
							}
						}
					}
				}
			}
		};
	},
};
