import express from 'express';
import { loginUser, singupUser } from '../controller/user-controller.js';
import { uploadImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js';
import { createPost, getAllPosts, getPost } from '../controller/post-controller.js';
import { authenticateToken } from '../controller/jwt-controller.js';

const router = express.Router();

router.post("/signup",singupUser);
router.post("/login",loginUser);

router.post('/file/upload', upload.single('file'),uploadImage);

router.post('/create', authenticateToken, createPost);

router.get('/posts', authenticateToken, getAllPosts);
router.get('/post/:id', authenticateToken, getPost);

export default router;