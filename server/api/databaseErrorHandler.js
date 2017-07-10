"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hri = require('human-readable-ids').hri;
function errorDatabase(res, err) {
    var id = hri.random();
    console.log('Database Error', id, err.message);
    res.status(500).json({ code: 'ERR-002', message: "Creation of lesson failed error code: " + id });
}
exports.errorDatabase = errorDatabase;
//# sourceMappingURL=databaseErrorHandler.js.map