import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export interface GradeAttributes {
    id_grade?: number;
    student_id: number;
    schedule_id: number;
    grade: number;
    status: boolean;
}

class Grade extends Model<GradeAttributes> implements GradeAttributes {
    public id_grade!: number;
    public student_id!: number;
    public schedule_id!: number;
    public grade!: number;
    public status!: boolean;
}

Grade.init(
    {
        id_grade: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'students',
                key: 'id_student'
            }
        },
        schedule_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'schedules',
                key: 'id_schedule'
            }
        },
        grade: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    },
    {
        sequelize,
        modelName: 'Grade',
        tableName: 'grades',
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
);

export default Grade;