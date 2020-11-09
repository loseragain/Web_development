"use strict";

require("babel-polyfill");

var _UserModel = _interopRequireDefault(require("./UserModel"));

var _constant = require("./constant");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Userone = new _UserModel["default"]();
console.log(Userone);
Userone.setName('Tezaswi Raj');
console.log(Userone);
console.log(Userone.getName());
console.log(_constant.APP_NAME, _constant.APP_VERSION, (0, _constant.getVersion)());
//# sourceMappingURL=index.js.map