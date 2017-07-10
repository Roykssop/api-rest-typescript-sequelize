"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ORM = require("sequelize");
var initCourseModel_1 = require("./initCourseModel");
var initLessonModel_1 = require("./initLessonModel");
var connection = new ORM('complete-typescript-course', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
connection.authenticate()
    .then(function () {
    console.log("Connection has been stablished");
})
    .catch(function (err) {
    console.log(err);
});
exports.courseModel = initCourseModel_1.initCourseModel(connection);
exports.lessonModel = initLessonModel_1.initLessonModel(connection);
exports.courseModel.hasMany(exports.lessonModel, { foreignKey: 'courseId' });
exports.lessonModel.belongsTo(exports.courseModel, { foreignKey: 'courseId' });
//# sourceMappingURL=model.js.map