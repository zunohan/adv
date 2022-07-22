"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchErr = void 0;
// error
const catchErr = (msg) => {
    return {
        success: false,
        msg: msg || "BAD REQUEST ...",
    };
};
exports.catchErr = catchErr;
//# sourceMappingURL=handleError.js.map