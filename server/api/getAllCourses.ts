import { Request, Response } from 'express';
import { findAllCourses } from "../queries/findAllCourses";
import { onError } from "./onError";
import * as _ from "lodash";
import { onSuccess } from "./onSuccess";

export function getAllCourses(req:Request, res:Response) {

    findAllCourses()
    .then(_.partial(onSuccess,res))
    .catch(_.partial(onError,res,"Error obteniendo cursos"));
} 
 
