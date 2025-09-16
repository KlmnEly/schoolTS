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

Teacher.init(
    {
        id_teacher: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'users',
                key: 'id_user'
            }
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
        modelName: 'Teacher',
        tableName: 'teachers',
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
);

export default Teacher;