"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
function createLesson(props) {
    //console.log("Propiedades",props);
    return model_1.lessonModel.create(props);
}
exports.createLesson = createLesson;
//# sourceMappingURL=createLesson.js.map