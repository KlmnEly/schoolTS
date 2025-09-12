import Course, { CourseAttributes } from '../models/Course';
import { CreateCourseDto, CourseDto } from '../dto/CourseDto';

export class CourseDao {
    async createCourse(createCourseDto: CreateCourseDto): Promise<CourseDto> {
        const courseDataToCreate = {
            ...createCourseDto,
            status: true 
        };

        const newCourse = await Course.create(courseDataToCreate);

        return new CourseDto(
            newCourse.id_course,
            newCourse.name,
            newCourse.description || null,
            newCourse.status
        );
    }

    async getCourseById(id: number): Promise<CourseDto | null> {
        const course = await Course.findByPk(id);
        if (!course) {
            return null;
        }
        return new CourseDto(
            course.id_course,
            course.name,
            course.description || null,
            course.status
        );
    }

    async getAllCourses(): Promise<CourseDto[]> {
        const courses = await Course.findAll();
        return courses.map(
            (course) =>
                new CourseDto(
                    course.id_course,
                    course.name,
                    course.description || null,
                    course.status
                )
        );
    }
}