"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var states_1 = require("../states/states");
var Cubit = /** @class */ (function () {
    function Cubit(state) {
        if (state === void 0) { state = null; }
        var _this = this;
        this.listen = function (fn) {
            _this.listeners.push(fn);
        };
        this.removeListener = function () {
            _this.listeners = [];
        };
        this.publishToListeners = function (state) {
            for (var _i = 0, _a = _this.listeners; _i < _a.length; _i++) {
                var listener = _a[_i];
                listener(state);
            }
        };
        this.emit = function (state) {
            _this.state = state;
            _this.publishToListeners(state);
        };
        this.state = state !== null && state !== void 0 ? state : new states_1.InitialState();
        this.listeners = [];
    }
    return Cubit;
}());
exports.default = Cubit;
