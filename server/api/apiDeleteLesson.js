"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var deleteLesson_1 = require("../queries/deleteLesson");
var onSuccess_1 = require("./onSuccess");
var databaseErrorHandler_1 = require("./databaseErrorHandler");
var onError_1 = require("./onError");
function apiDeleteLesson(req, res) {
    var lessonId = req.params.id;
    deleteLesson_1.deleteLesson(lessonId)
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(databaseErrorHandler_1.errorDatabase, res))
        .catch(_.partial(onError_1.onError, res, "Error actualizando las lecciones"));
}
exports.apiDeleteLesson = apiDeleteLesson;
//# sourceMappingURL=apiDeleteLesson.js.map