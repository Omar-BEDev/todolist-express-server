import { ObjectId } from "mongoose"
import { Request } from "express"

export interface ITask{
    taskName : string,
    userId : ObjectId,
    date : Date
}

export interface IUser{
    name : string,
    nickName : string,
    email : string,
    password : string
}
export interface userPayload {
    id : ObjectId,
    role : string
}

export interface authRequest extends Request{
    user? : userPayload    
}
