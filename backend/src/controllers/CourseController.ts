import { Request, Response } from 'express';
import { CourseDao } from '../dao/CourseDao';
import { CreateCourseDto } from '../dto/CourseDto';

const courseDao = new CourseDao();

export const createCourse = async (req: Request, res: Response) => {
  try {
    const createCourseDto: CreateCourseDto = req.body;
    const newCourse = await courseDao.createCourse(createCourseDto);
    res.status(201).json(newCourse);
  } catch (error) {
    console.error('Error al crear el curso:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const getCourseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const course = await courseDao.getCourseById(parseInt(id, 10));
    if (!course) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }
    res.status(200).json(course);
  } catch (error) {
    console.error('Error al obtener el curso:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const getAllCourses = async (req: Request, res: Response) => {
  try {
    const courses = await courseDao.getAllCourses();
    res.status(200).json(courses);
  } catch (error) {
    console.error('Error al obtener los cursos:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};