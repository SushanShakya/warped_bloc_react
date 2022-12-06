"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var BlocBuilder = function (_a) {
    var bloc = _a.bloc, builder = _a.builder;
    var _b = (0, react_1.useState)(bloc.state), state = _b[0], setState = _b[1];
    (0, react_1.useEffect)(function () {
        bloc.listen(function (state) {
            console.log(state);
            setState(state);
        });
        return function () {
            bloc.removeListener();
        };
    }, [bloc]);
    return builder(state);
};
exports.default = BlocBuilder;
