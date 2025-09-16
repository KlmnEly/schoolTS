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

TeacherProfession.init(
    {
        id_teacher_profession: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        teacher_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'teachers',
                key: 'id_teacher'
            }
        },
        profession_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'professions',
                key: 'id_profession'
            }
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    },
    {
        sequelize,
        modelName: 'TeacherProfession',
        tableName: 'teacher_profession',
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
);

export default TeacherProfession;