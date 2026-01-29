import mongoose, {Schema, Document} from "mongoose";
import { IUser } from "../interfaces";

export interface IUserDocument extends IUser, Document{}

const shema = new Schema<IUser>({
    name : {
        type : String,
        required : true
    },
    nickName : {
        required : true,
        type : String
    },
    email : {
        required : true,
        unique : true,
        type : String
    },
    password : {
        required : true,
        type : String
    },
})
export const User = mongoose.model("user",shema)