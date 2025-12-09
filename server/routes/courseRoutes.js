import express from 'express';
import { 
  createCourse, 
  getAllCourses, 
  getCourseById, 
  uploadVideo, 
  uploadPDF 
} from '../controllers/courseController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/create', protect, createCourse);
router.get('/all', getAllCourses);
router.get('/:id', getCourseById);
router.post('/upload-video', protect, uploadVideo);
router.post('/upload-pdf', protect, uploadPDF);

export default router;
