import { Router } from "express";
import { login, sign } from "../../controller/user.controller";
import { validateLoginInput, validateUserInput } from "../../middleware/users.middleware";


const userRoutes = Router()

userRoutes.post("/login",validateLoginInput,login)
userRoutes.post("/sign",validateUserInput ,sign)
export default userRoutes