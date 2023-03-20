import { Router } from "express";
import * as controller from "../controllers/userController.js";

const router = Router()

router.get('/:id', controller.getUser)

export default router