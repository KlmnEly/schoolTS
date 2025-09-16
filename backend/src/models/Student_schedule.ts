import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export interface StudentScheduleAttributes {
    id_student_schedule?: number;
    student_id: number;
    schedule_id: number;
    status: boolean;
}

class StudentSchedule extends Model<StudentScheduleAttributes> implements StudentScheduleAttributes {
    public id_student_schedule!: number;
    public student_id!: number;
    public schedule_id!: number;
    public status!: boolean;
}

StudentSchedule.init(
    {
        id_student_schedule: {
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
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    },
    {
        sequelize,
        modelName: 'StudentSchedule',
        tableName: 'student_schedule',
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
);

export default StudentSchedule;