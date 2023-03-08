"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useBloc = function (bloc) {
    var _a = (0, react_1.useState)(new bloc()), cubit = _a[0], setBloc = _a[1];
    return cubit;
};
exports.default = useBloc;
