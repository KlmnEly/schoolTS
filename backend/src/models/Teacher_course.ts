import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export interface TeacherCourseAttributes {
    id_teacher_course?: number;
    teacher_id: number;
    course_id: number;
    status: boolean;
}

class TeacherCourse extends Model<TeacherCourseAttributes> implements TeacherCourseAttributes {
    public id_teacher_course!: number;
    public teacher_id!: number;
    public course_id!: number;
    public status!: boolean;
}

export default TeacherCourse;