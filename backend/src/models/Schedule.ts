import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
import e from 'express';

export interface ScheduleAttributes {
    id_schedule?: number;
    teacher_subject_id: number;
    subject_id: number;
    day: string;
    hour_start: string;
    hour_end: string;
    status: boolean;
}

class Schedule extends Model<ScheduleAttributes> implements ScheduleAttributes {
    public id_schedule!: number;
    public teacher_subject_id!: number;
    public subject_id!: number;
    public day!: string;
    public hour_start!: string;
    public hour_end!: string;
    public status!: boolean;
}

Schedule.init(
    {
        id_schedule: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        teacher_subject_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'teacher_subject',
                key: 'id_teacher_subject'
            }
        },
        subject_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'subjects',
                key: 'id_subject'
            }
        },
        day: {
            type: DataTypes.ENUM('Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'),
            allowNull: false
        },
        hour_start: {
            type: DataTypes.TIME,
            allowNull: false
        },
        hour_end: {
            type: DataTypes.TIME,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    },
    {
        sequelize,
        modelName: 'Schedule',
        tableName: 'schedules',
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
);

export default Schedule;