import { Router } from 'express';
import { createCourse, getCourseById, getAllCourses } from '../controllers/CourseController';

const router = Router();

router.post('/', createCourse);
router.get('/:id', getCourseById);
router.get('/', getAllCourses);

export default router;