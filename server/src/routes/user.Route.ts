import { Router } from "express";
import { login, signup } from "../controllers/user.Controller";
import auth from "../middleware/auth.middleware";
import { Role } from "../types/enum";

const userRoute = Router()

userRoute.post('/', signup)
userRoute.post('/login', auth([Role.user, Role.admin]), login)

export default userRoute