import { Router } from "express";
import { createUser, loginUser, logoutUser } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router()

router.route('/signup')
    .post(createUser)

router.route('/signin')
    .post(loginUser)

router.route('/signout')
    .post(verifyJWT, logoutUser)

export default router