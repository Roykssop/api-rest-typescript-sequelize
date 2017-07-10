import {lessonModel} from '../model/model';

export function deleteLesson(id:number){

    return lessonModel.destroy(
        {where : { id } }
    )
}