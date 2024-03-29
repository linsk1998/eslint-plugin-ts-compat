/**
 * Finds the eslint-scope reference in the given scope.
 * @param {Object} scope The scope to search.
 * @param {ASTNode} node The identifier node.
 * @returns {Reference|null} Returns the found reference or null if none were found.
 */
function findReference(scope, node) {
	const references = scope.references.filter(reference => reference.identifier.range[0] === node.range[0] &&
		reference.identifier.range[1] === node.range[1]);

	if(references.length === 1) {
		return references[0];
	}
	return null;
}

/**
 * Checks if the given identifier node is shadowed in the given scope.
 * @param {Object} scope The current scope.
 * @param {string} node The identifier node to check
 * @returns {boolean} Whether or not the name is shadowed.
 */
function isShadowed(scope, node) {
	const reference = findReference(scope, node);

	return reference && reference.resolved && reference.resolved.defs.length > 0;
}

module.exports = isShadowed;