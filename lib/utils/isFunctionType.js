const tsutils = require("tsutils");
const ts = require("typescript");

const FUNCTION_CONSTRUCTOR = 'Function';
module.exports = function isFunctionType(type, services) {
	const program = services.program;
	const checker = program.getTypeChecker();
	const symbol = type.getSymbol();

	if(
		symbol &&
		tsutils.isSymbolFlagSet(
			symbol,
			ts.SymbolFlags.Function | ts.SymbolFlags.Method,
		)
	) {
		return true;
	}

	if(symbol && symbol.escapedName === FUNCTION_CONSTRUCTOR) {
		const declarations = symbol.getDeclarations() ?? [];
		for(const declaration of declarations) {
			const sourceFile = declaration.getSourceFile();
			if(program.isSourceFileDefaultLibrary(sourceFile)) {
				return true;
			}
		}
	}

	const signatures = checker.getSignaturesOfType(
		type,
		ts.SignatureKind.Call,
	);

	return signatures.length > 0;
};