import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export interface TeacherProfessionAttributes {
    id_teacher_profession?: number;
    teacher_id: number;
    profession_id: number;
    status: boolean;
}

class TeacherProfession extends Model<TeacherProfessionAttributes> implements TeacherProfessionAttributes {
    public id_teacher_profession!: number;
    public teacher_id!: number;
    public profession_id!: number;
    public status!: boolean;
}

export default TeacherProfession;