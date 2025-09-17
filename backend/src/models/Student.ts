import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export interface StudentAttributes {
    id_student?: number;
    document_type_id: number;
    full_name: string;
    document_number: string;
    birth_date: Date;
    status: boolean;
}

class Student extends Model<StudentAttributes> implements StudentAttributes {
    public id_student!: number;
    public document_type_id!: number;
    public full_name!: string
    public document_number!: string;
    public birth_date!: Date;
    public status!: boolean;
}

export default Student;