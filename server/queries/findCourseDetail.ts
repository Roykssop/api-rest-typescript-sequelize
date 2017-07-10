import { courseModel, lessonModel } from "../model/model";

export function findCourseDetail(id:number){
    return courseModel.findById(id,{
        include : [ 
            { model : lessonModel}
        ]
    });
}
