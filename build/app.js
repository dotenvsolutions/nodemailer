"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _config = _interopRequireDefault(require("../libs/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _config["default"])((0, _express["default"])()); //app.use(morgan('dev'))

var _default = app;
exports["default"] = _default;