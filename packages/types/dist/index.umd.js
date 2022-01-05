(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["@blitzar/types"] = {}));
})(this, (function (exports) { 'use strict';

	const ROW_SELECTION_ID = 'BLITZ-TABLE-ROW-SELECTION';
	const MORE_PAGES = '...';

	exports.MORE_PAGES = MORE_PAGES;
	exports.ROW_SELECTION_ID = ROW_SELECTION_ID;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
