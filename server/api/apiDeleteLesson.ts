import {Response, Request} from 'express';
import * as _ from 'lodash';
import { deleteLesson } from "../queries/deleteLesson";
import { onSuccess } from "./onSuccess";
import { errorDatabase } from "./databaseErrorHandler";
import { onError } from "./onError";


export function apiDeleteLesson(req:Request,res:Response){
    const lessonId = req.params.id;

    deleteLesson(lessonId)
        .then(_.partial(onSuccess,res))
        .catch(_.partial(errorDatabase,res))
        .catch(_.partial(onError,res,"Error actualizando las lecciones"));    

}