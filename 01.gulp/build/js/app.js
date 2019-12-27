"use strict";

var _module = _interopRequireDefault(require("./module1"));

var _modules = require("./modules2");

var _module2 = require("./module3");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 主模块
 */
// 引入其他模块内容
console.log((0, _module["default"])(1, 2));
console.log(_modules.name, _modules.age);
console.log((0, _module2.mul)(3, 4));