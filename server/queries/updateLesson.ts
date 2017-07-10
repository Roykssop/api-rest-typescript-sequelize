import { lessonModel } from "../model/model";

export function updateLesson(id: number, props: any) {
    return lessonModel.update(
        props, 
        { where: 
            { id: id }
        }
    )
}