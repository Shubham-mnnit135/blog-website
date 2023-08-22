import express from 'express';
import { singupUser } from '../controller/user-controller.js';

const router = express.Router();

router.post("/signup",singupUser);

export default router;