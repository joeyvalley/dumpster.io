import { Router } from "express";
import * as controller from "../controllers/userController.js";
import UserUpdateProfile from "../controllers/userProfile.js";

const router = Router()

router.patch('/profile/:id', UserUpdateProfile)
router.get('/:id', controller.getUser)

export default router