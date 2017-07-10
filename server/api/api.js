"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAllCourses_1 = require("./getAllCourses");
var getCourseDetail_1 = require("./getCourseDetail");
var createLesson_1 = require("./createLesson");
var apiUpdateLesson_1 = require("./apiUpdateLesson");
var apiDeleteLesson_1 = require("./apiDeleteLesson");
function initRestApi(app) {
    app.route('/api/courses').get(getAllCourses_1.getAllCourses);
    app.route('/api/courses/:id').get(getCourseDetail_1.getCourseDetail);
    app.route('/api/lesson/').post(createLesson_1.apiCreateLesson);
    app.route('/api/lesson/:id').patch(apiUpdateLesson_1.apiUpdateLesson);
    app.route('/api/lesson/:id').delete(apiDeleteLesson_1.apiDeleteLesson);
}
exports.initRestApi = initRestApi;
//# sourceMappingURL=api.js.map