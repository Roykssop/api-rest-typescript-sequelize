import {Request,Response} from 'express';
const hri = require('human-readable-ids').hri;

export function errorDatabase(res:Response,err:any){
    const id = hri.random();

    console.log('Database Error', id, err.message);
    res.status(500).json({ code: 'ERR-002', message: `Creation of lesson failed error code: ${id}`});
}