import { Router } from "express";
import { purchase } from "../controllers/purchase.controller";
import auth from "../middleware/auth.middleware";
import { Role } from "../types/enum";

const purchaseRoute = Router()

purchaseRoute.post('/:productID', auth([Role.admin, Role.user]), purchase)
console.log("request came here")



export default purchaseRoute