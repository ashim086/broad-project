import { Router } from "express";
import { routeTest } from "../controllers/user.Controller";

const userRoute = Router()

userRoute.get('/', routeTest)

export default userRoute