import { Request, Response, NextFunction } from 'express';


export function errorHandler(err:any,req:Request, res:Response,next:NextFunction){
    console.log("Api error",err);

    res.status(500).json({errorCode:'Internal server error'});
}