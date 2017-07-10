"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
function findCourseDetail(id) {
    return model_1.courseModel.findById(id, {
        include: [
            { model: model_1.lessonModel }
        ]
    });
}
exports.findCourseDetail = findCourseDetail;
//# sourceMappingURL=findCourseDetail.js.map