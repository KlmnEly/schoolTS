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

export default Grade;