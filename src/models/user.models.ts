import mongoose, {Schema, Document} from "mongoose";
import { IUser } from "../interfaces";

export interface IUserDocument extends IUser, Document{}

const shema = new Schema<IUser>({
    name : {
        required : true,
    },
    nickName : {
        required : true
    },
    email : {
        required : true,
        unique : true
    },
    password : {
        required : true
    },
})
export const User = mongoose.model("user",shema)