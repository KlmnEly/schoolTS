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

TeacherCourse.init(
    {
        id_teacher_course: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        teacher_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'teachers',
                key: 'id_teacher'
            }
        },
        course_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'courses',
                key: 'id_course'
            }
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    },
    {
        sequelize,
        modelName: 'TeacherCourse',
        tableName: 'teacher_course',
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
);

export default TeacherCourse;