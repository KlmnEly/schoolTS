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

export default StudentSchedule;