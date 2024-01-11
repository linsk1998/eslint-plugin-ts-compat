const { getTypeName } = require("@typescript-eslint/type-utils");

/**
 * Check if a given type is a string.
 * @param type The type to check.
 */
module.exports = function isStringType(objectType, services) {
	const program = services.program;
	const checker = program.getTypeChecker();
	return getTypeName(checker, objectType) === 'string';
};