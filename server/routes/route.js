import express from 'express';
import { loginUser, singupUser } from '../controller/user-controller.js';

const router = express.Router();

router.post("/signup",singupUser);
router.post("/login",loginUser);

export default router;