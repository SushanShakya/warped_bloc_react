"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var BlocListener_1 = require("./BlocListener");
var BlocBuilder_1 = require("./BlocBuilder");
var BlocConsumer = function (_a) {
    var bloc = _a.bloc, listener = _a.listener, builder = _a.builder;
    return (<BlocListener_1.default bloc={bloc} listener={listener} child={(<BlocBuilder_1.default bloc={bloc} builder={builder}/>)}/>);
};
exports.default = BlocConsumer;
