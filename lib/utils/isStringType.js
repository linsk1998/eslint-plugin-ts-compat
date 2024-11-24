const tsutils = require("ts-api-utils");
const ts = require('typescript');

/**
 * Check if a given type is a string.
 * @param type The type to check.
 */
module.exports = function isStringType(type) {
	return tsutils.isTypeFlagSet(
		type,
		ts.TypeFlags.StringLike
	);
};
