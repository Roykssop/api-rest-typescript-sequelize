"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var findAllCourses_1 = require("../queries/findAllCourses");
var onError_1 = require("./onError");
var _ = require("lodash");
var onSuccess_1 = require("./onSuccess");
function getAllCourses(req, res) {
    findAllCourses_1.findAllCourses()
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(onError_1.onError, res, "Error obteniendo cursos"));
}
exports.getAllCourses = getAllCourses;
//# sourceMappingURL=getAllCourses.js.map