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

Student.init(
    {
        id_student: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        document_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'document_types',
                key: 'id_document_type'
            }
        },
        full_name: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        document_number: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true
        },
        birth_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    },
    {
        sequelize,
        modelName: 'Student',
        tableName: 'students',
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
);

export default Student;