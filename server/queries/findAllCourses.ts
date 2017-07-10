import { courseModel } from "../model/model";

export function findAllCourses() {
    return courseModel.findAll({ order: ['seqNo'] })
}