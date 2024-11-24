
const tsutils = require("ts-api-utils");
const ts = require('typescript');
/**
 * Check if a given type is a number.
 * @param type The type to check.
 */
module.exports = function isNumberType(type) {
	return tsutils.isTypeFlagSet(
		type,
		ts.TypeFlags.NumberLike
	);
};
