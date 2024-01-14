/**
 * @fileoverview Check browser compat.
 * @author linsk1998
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
const rules = requireIndex(__dirname + "/rules");

module.exports = {
	rules,
	configs: {
		recommended: {
			plugins: ["ts-compat"],
			rules: Object.fromEntries(
				Object.entries(rules)
					.filter(([, rule]) => rule.meta.docs.recommended)
					.map(([key]) => ["ts-compat/" + key, 2])
			)
		}
	}
};