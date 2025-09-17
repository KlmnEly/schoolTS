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

export default Schedule;