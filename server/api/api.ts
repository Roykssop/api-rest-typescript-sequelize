
import { Application, Request, Response } from 'express';
import { getAllCourses } from "./getAllCourses";
import { getCourseDetail } from "./getCourseDetail";
import { apiCreateLesson } from "./createLesson";
import { apiUpdateLesson } from "./apiUpdateLesson";
import { apiDeleteLesson } from "./apiDeleteLesson";

export function initRestApi(app:Application){
    app.route('/api/courses').get(getAllCourses)
    app.route('/api/courses/:id').get(getCourseDetail);

    app.route('/api/lesson/').post(apiCreateLesson);
    app.route('/api/lesson/:id').patch(apiUpdateLesson);
    app.route('/api/lesson/:id').delete(apiDeleteLesson);
}