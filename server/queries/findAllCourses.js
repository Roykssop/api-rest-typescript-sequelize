"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
function findAllCourses() {
    return model_1.courseModel.findAll({ order: ['seqNo'] });
}
exports.findAllCourses = findAllCourses;
//# sourceMappingURL=findAllCourses.js.map