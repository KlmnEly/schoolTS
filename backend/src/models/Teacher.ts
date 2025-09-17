import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export interface TeacherAttributes {
    id_teacher?: number;
    user_id?: number;
    document_type_id: number;
    full_name: string;
    document_number: string;
    birth_date: Date;
    status: boolean;
}

class Teacher extends Model<TeacherAttributes> implements TeacherAttributes {
    public id_teacher!: number;
    public user_id?: number;
    public document_type_id!: number;
    public full_name!: string
    public document_number!: string;
    public birth_date!: Date;
    public status!: boolean;
}

export default Teacher;