import {Response,Request} from 'express';
import * as _ from 'lodash';
import { onError } from "./onError";
import { onSuccess } from "./onSuccess";
import { findCourseDetail } from "../queries/findCourseDetail";

export function getCourseDetail(req:Request,res:Response){
    const courseId = req.params.id;

    findCourseDetail(courseId)
    .then(_.partial(onSuccess,res))
    .catch(_.partial(onError,res,"Error obteniendo cursos"));    

}