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
		},
		browserslist: Object.defineProperties({}, {
			plugins: {
				enumerable: true,
				value: ["ts-compat"]
			},
			rules: {
				enumerable: true,
				get() {
					// const caniuse = require('caniuse-lite');
					const browserslist = require('browserslist');
					// 获取配置的浏览器列表
					const browsers = browserslist();
					var r = {};
					var unsupport = browsers.some(browser => {
						var [name, version] = browser.split(' ');
						version = parseInt(version, 10);
						return name === 'chrome' && version < 49
							|| name === 'edge' && version <= 18
							|| name === 'firefox' && version < 37
							|| name === 'safari' && version < 9
							|| name === 'opera' && version < 39
							|| name === 'android' && version < 5
							|| name === 'ios_saf' && version < 9
							|| name === 'ie';
					});
					if(unsupport) {
						r["ts-compat/no-regexp-flags"] = 2;
					}
					unsupport = browsers.some(browser => {
						var [name, version] = browser.split(' ');
						version = parseInt(version, 10);
						return name === 'chrome' && version < 49
							|| name === 'edge' && version < 13
							|| name === 'safari' && version < 10
							|| name === 'firefox' && version < 3
							|| name === 'opera' && version < 36
							|| name === 'android' && version < 120
							|| name === 'ios_saf' && version < 10
							|| name === 'ie';
					});
					if(unsupport) {
						r["ts-compat/no-regexp-sticky"] = 2;
					}
					unsupport = browsers.some(browser => {
						var [name, version] = browser.split(' ');
						version = parseInt(version, 10);
						return name === 'chrome' && version < 50
							|| name === 'safari' && version < 10
							|| name === 'firefox' && version < 46
							|| name === 'opera' && version < 37
							|| name === 'android' && version < 120
							|| name === 'ios_saf' && version < 10
							|| name === 'ie';
					});
					if(unsupport) {
						r["ts-compat/no-regexp-unicode"] = 2;
					}
					unsupport = browsers.some(browser => {
						var [name, version] = browser.split(' ');
						version = parseInt(version, 10);
						return name === 'opera' && version < 9
							|| name === 'ie';
					});
					if(unsupport) {
						r["ts-compat/no-string-index"] = 2;
					}
					unsupport = browsers.some(browser => {
						var [name, version] = browser.split(' ');
						version = parseInt(version, 10);
						return name === 'ie' && version < 9;
					});
					if(unsupport) {
						r["ts-compat/prefer-inner-text"] = 2;
					}
					return r;
				}
			}
		})
	}
};
