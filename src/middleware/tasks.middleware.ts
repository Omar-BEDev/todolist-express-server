import { z } from "zod"
import { Response, Request, NextFunction } from "express"
export interface Params {
    id : number
}

export const validateTaskRequest = (req : Request,res : Response,next : NextFunction) => {

    const shema = z.object({
        name : z.string().min(1),
        id : z.coerce.number()
    })

    const data = shema.safeParse(req.body);

    if(!data.success) return res.status(400).json(data.error.message)
    req.body = data

    next()
}

export const validateParamsRequest = (req : Request<Params>,res : Response, next : NextFunction) => {
    
    const shema = z.object({
        id : z.coerce.number(),
    })

    const id = shema.safeParse(req.params.id);
    if (!id.success) return res.status(400).json(id.error.message)
    req.params = id.data
    next()
}