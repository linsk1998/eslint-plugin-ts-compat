/**
 * @fileoverview Prefer url href
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
			description: "Prefer url href.",
			recommended: false,
			url: null, // URL to the documentation page for this rule
		},
		fixable: "code", // Or `code` or `whitespace`
		schema: [], // Add a schema if the rule has options
		messages: {
			preferUrlHref: "Prefer url href"
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
					callee.name === "String" &&
					node.arguments.length > 0
				) {
					const currentScope = sourceCode.getScope(node);
					if(!isShadowed(currentScope, callee)) {
						const arg1 = node.arguments[0];
						const services = ESLintUtils.getParserServices(context);
						const type = services.getTypeAtLocation(arg1);
						if(isTypeGlobalType(type, 'URL', services)) {
							return context.report({
								messageId: "preferUrlHref",
								node: node,
								fix: function(fixer) {
									const textBetween = sourceCode.text.slice(
										arg1.range[0],
										arg1.range[1],
									);
									return fixer.replaceTextRange(node.range, textBetween + `.href`);
								}
							});
						}
					}
				}
			},
			TemplateLiteral(node) {
				const { expressions } = node;
				const services = ESLintUtils.getParserServices(context);
				expressions.forEach((exp) => {
					const type = services.getTypeAtLocation(exp);
					if(isTypeGlobalType(type, 'URL', services)) {
						return context.report({
							messageId: "preferUrlHref",
							node: exp,
							fix: function(fixer) {
								return fixer.insertTextAfter(exp, `.href`);
							}
						});
					}
				});
			},
			BinaryExpression(node) {
				const { left, right, operator } = node;
				if(operator === "+") {
					const services = ESLintUtils.getParserServices(context);
					const type1 = services.getTypeAtLocation(left);
					if(isTypeGlobalType(type1, 'URL', services)) {
						return context.report({
							messageId: "preferUrlHref",
							node: left,
							fix: function(fixer) {
								return fixer.insertTextAfter(left, `.href`);
							}
						});
					}
					const type2 = services.getTypeAtLocation(right);
					if(isTypeGlobalType(type2, 'URL', services)) {
						return context.report({
							messageId: "preferUrlHref",
							node: right,
							fix: function(fixer) {
								return fixer.insertTextAfter(right, `.href`);
							}
						});
					}
				}
			}
		};
	},
};
