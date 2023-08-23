import express from 'express';
import { loginUser, singupUser } from '../controller/user-controller.js';
import { createPost, getAllPosts, getPost, updatePost,deletePost} from '../controller/post-controller.js';
import { authenticateToken } from '../controller/jwt-controller.js';
import { getComments, newComment, deleteComment } from '../controller/comment-controller.js';

const router = express.Router();

router.post("/signup",singupUser);
router.post("/login",loginUser);

router.post('/create', authenticateToken, createPost);
router.put('/update/:id', authenticateToken, updatePost);
router.delete('/delete/:id', authenticateToken, deletePost);

router.get('/posts', authenticateToken, getAllPosts);
router.get('/post/:id', authenticateToken, getPost);

router.post('/comment/new', authenticateToken, newComment);
router.get('/comments/:id', authenticateToken, getComments);
router.delete('/comment/delete/:id', authenticateToken, deleteComment);
export default router;