"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var onError_1 = require("./onError");
var onSuccess_1 = require("./onSuccess");
var findCourseDetail_1 = require("../queries/findCourseDetail");
function getCourseDetail(req, res) {
    var courseId = req.params.id;
    findCourseDetail_1.findCourseDetail(courseId)
        .then(_.partial(onSuccess_1.onSuccess, res))
        .catch(_.partial(onError_1.onError, res, "Error obteniendo cursos"));
}
exports.getCourseDetail = getCourseDetail;
//# sourceMappingURL=getCourseDetail.js.map