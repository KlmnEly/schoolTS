import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export interface SubjectAttributes {
    id_subject?: number;
    name: string;
    description?: string;
    status: boolean;
}

class Subject extends Model<SubjectAttributes> implements SubjectAttributes {
    public id_subject!: number;
    public name!: string;
    public description?: string;
    public status!: boolean;
}

Subject.init(
    {
        id_subject: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    },
    {
        sequelize,
        modelName: 'Subject',
        tableName: 'subjects',
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
);

export default Subject;