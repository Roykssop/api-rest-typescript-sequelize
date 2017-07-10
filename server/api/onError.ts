import { Response } from 'express';
import * as _ from 'lodash';

export function onError(res:Response,message:string,err:any){

    console.error("Err api",err);
}