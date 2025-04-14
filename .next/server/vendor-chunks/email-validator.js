"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/email-validator";
exports.ids = ["vendor-chunks/email-validator"];
exports.modules = {

/***/ "(ssr)/./node_modules/email-validator/index.js":
/*!***********************************************!*\
  !*** ./node_modules/email-validator/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\n\r\nvar tester = /^[-!#$%&'*+\\/0-9=?A-Z^_a-z{|}~](\\.?[-!#$%&'*+\\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\\.?[a-zA-Z0-9])*\\.[a-zA-Z](-?[a-zA-Z0-9])+$/;\r\n// Thanks to:\r\n// http://fightingforalostcause.net/misc/2006/compare-email-regex.php\r\n// http://thedailywtf.com/Articles/Validating_Email_Addresses.aspx\r\n// http://stackoverflow.com/questions/201323/what-is-the-best-regular-expression-for-validating-email-addresses/201378#201378\r\nexports.validate = function(email)\r\n{\r\n\tif (!email)\r\n\t\treturn false;\r\n\t\t\r\n\tif(email.length>254)\r\n\t\treturn false;\r\n\r\n\tvar valid = tester.test(email);\r\n\tif(!valid)\r\n\t\treturn false;\r\n\r\n\t// Further checking of some things regex can't handle\r\n\tvar parts = email.split(\"@\");\r\n\tif(parts[0].length>64)\r\n\t\treturn false;\r\n\r\n\tvar domainParts = parts[1].split(\".\");\r\n\tif(domainParts.some(function(part) { return part.length>63; }))\r\n\t\treturn false;\r\n\r\n\treturn true;\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1haWwtdmFsaWRhdG9yL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQSx5Q0FBeUMsRUFBRSxpQ0FBaUMsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHdCQUF3QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL2NoYW5jZW1jYWxsaXN0ZXIvUHJvamVjdHMvenVwYXNzaHVudC9ub2RlX21vZHVsZXMvZW1haWwtdmFsaWRhdG9yL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIHRlc3RlciA9IC9eWy0hIyQlJicqK1xcLzAtOT0/QS1aXl9hLXp7fH1+XShcXC4/Wy0hIyQlJicqK1xcLzAtOT0/QS1aXl9hLXpge3x9fl0pKkBbYS16QS1aMC05XSgtKlxcLj9bYS16QS1aMC05XSkqXFwuW2EtekEtWl0oLT9bYS16QS1aMC05XSkrJC87XHJcbi8vIFRoYW5rcyB0bzpcclxuLy8gaHR0cDovL2ZpZ2h0aW5nZm9yYWxvc3RjYXVzZS5uZXQvbWlzYy8yMDA2L2NvbXBhcmUtZW1haWwtcmVnZXgucGhwXHJcbi8vIGh0dHA6Ly90aGVkYWlseXd0Zi5jb20vQXJ0aWNsZXMvVmFsaWRhdGluZ19FbWFpbF9BZGRyZXNzZXMuYXNweFxyXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIwMTMyMy93aGF0LWlzLXRoZS1iZXN0LXJlZ3VsYXItZXhwcmVzc2lvbi1mb3ItdmFsaWRhdGluZy1lbWFpbC1hZGRyZXNzZXMvMjAxMzc4IzIwMTM3OFxyXG5leHBvcnRzLnZhbGlkYXRlID0gZnVuY3Rpb24oZW1haWwpXHJcbntcclxuXHRpZiAoIWVtYWlsKVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHJcblx0aWYoZW1haWwubGVuZ3RoPjI1NClcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0dmFyIHZhbGlkID0gdGVzdGVyLnRlc3QoZW1haWwpO1xyXG5cdGlmKCF2YWxpZClcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0Ly8gRnVydGhlciBjaGVja2luZyBvZiBzb21lIHRoaW5ncyByZWdleCBjYW4ndCBoYW5kbGVcclxuXHR2YXIgcGFydHMgPSBlbWFpbC5zcGxpdChcIkBcIik7XHJcblx0aWYocGFydHNbMF0ubGVuZ3RoPjY0KVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHR2YXIgZG9tYWluUGFydHMgPSBwYXJ0c1sxXS5zcGxpdChcIi5cIik7XHJcblx0aWYoZG9tYWluUGFydHMuc29tZShmdW5jdGlvbihwYXJ0KSB7IHJldHVybiBwYXJ0Lmxlbmd0aD42MzsgfSkpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59Il0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/email-validator/index.js\n");

/***/ })

};
;