const ts = require("typescript");

module.exports = function isTypeGlobalType(type, name, services) {
	const program = services.program;
	const checker = program.getTypeChecker();

	let isType = (type) => isTypeGlobalType(type, name, services);
	if(type.isIntersection()) {
		return type.types.some(isType);
	}
	if(type.isUnion()) {
		return type.types.every(isType);
	}

	const symbol = type.getSymbol();
	if(!symbol) {
		return false;
	}

	if(symbol.getName() === name) {
		let declarations = symbol.getDeclarations();
		if(declarations == null) declarations = [];
		for(const declaration of declarations) {
			const sourceFile = declaration.getSourceFile();
			if(services.program.isSourceFileDefaultLibrary(sourceFile)) {
				return true;
			}
		}
	}

	if(symbol.flags & (ts.SymbolFlags.Class | ts.SymbolFlags.Interface)) {
		for(const baseType of checker.getBaseTypes(type)) {
			if(isType(baseType)) {
				return true;
			}
		}
	}

	return false;
};