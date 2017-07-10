"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var onSuccess_1 = require("./onSuccess");
var onError_1 = require("./onError");
var databaseErrorHandler_1 = require("./databaseErrorHandler");
var updateLesson_1 = require("../queries/updateLesson");
function apiUpdateLesson(req, res) {
    var id = req.params.id;
    updateLesson_1.updateLesson(id, req.body)
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(databaseErrorHandler_1.errorDatabase, res))
        .catch(_.partial(onError_1.onError, res, "Error actualizando las lecciones"));
}
exports.apiUpdateLesson = apiUpdateLesson;
//# sourceMappingURL=apiUpdateLesson.js.map