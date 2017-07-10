import {Request,Response} from 'express';
import * as _ from 'lodash';
import { onSuccess } from "./onSuccess";
import { onError } from "./onError";
import { errorDatabase } from "./databaseErrorHandler";
import { updateLesson } from "../queries/updateLesson";


export function apiUpdateLesson(req:Request,res:Response){
    const id = req.params.id;

    updateLesson(id,req.body)
        .then(_.partial(onSuccess,res))
        .catch(_.partial(errorDatabase,res))
        .catch(_.partial(onError,res,"Error actualizando las lecciones"));
}