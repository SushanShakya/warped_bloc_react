"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorState = /** @class */ (function () {
    function ErrorState(message, data) {
        if (data === void 0) { data = null; }
        this.message = message;
        this.data = data;
    }
    return ErrorState;
}());
exports.default = ErrorState;
