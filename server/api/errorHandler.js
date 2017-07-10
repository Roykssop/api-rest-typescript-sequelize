"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(err, req, res, next) {
    console.log("Api error", err);
    res.status(500).json({ errorCode: 'Internal server error' });
}
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map