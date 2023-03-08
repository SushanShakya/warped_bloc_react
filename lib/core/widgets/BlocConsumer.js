"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var BlocListener_1 = __importDefault(require("./BlocListener"));
var BlocBuilder_1 = __importDefault(require("./BlocBuilder"));
var BlocConsumer = function (_a) {
    var bloc = _a.bloc, listener = _a.listener, builder = _a.builder;
    return ((0, jsx_runtime_1.jsx)(BlocListener_1.default, { bloc: bloc, listener: listener, child: ((0, jsx_runtime_1.jsx)(BlocBuilder_1.default, { bloc: bloc, builder: builder })) }));
};
exports.default = BlocConsumer;
