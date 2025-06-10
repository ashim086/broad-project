import { Router } from "express";
import { cart, createWishlist, getCart, getWishlist } from "../controllers/wishlist.controller";
import auth from "../middleware/auth.middleware";
import { Role } from "../types/enum";

const wishlistRoute = Router();

wishlistRoute.get('/wishlist', auth([Role.admin, Role.user]), getWishlist)
wishlistRoute.get('/cart', auth([Role.admin, Role.user]), getCart)
wishlistRoute.post('/wishlist/:id', auth([Role.admin, Role.user]), createWishlist)
wishlistRoute.post('/cart/:id', auth([Role.admin, Role.user]), cart)

export default wishlistRoute