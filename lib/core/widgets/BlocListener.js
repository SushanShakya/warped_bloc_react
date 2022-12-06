"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var BlocListener = function (_a) {
    var bloc = _a.bloc, listener = _a.listener, child = _a.child;
    (0, react_1.useEffect)(function () {
        bloc.listen(listener);
        return function () {
            bloc.removeListener();
        };
    }, [bloc]);
    return child;
};
exports.default = BlocListener;
