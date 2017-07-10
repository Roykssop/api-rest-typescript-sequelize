import { lessonModel } from '../model/model';

export function createLesson(props:any){
    //console.log("Propiedades",props);
    return lessonModel.create(props);

}