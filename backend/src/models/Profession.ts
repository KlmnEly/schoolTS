import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export interface ProfessionAttributes {
    id_profession?: number;
    name: string;
    description?: string;
    status: boolean;
}

class Profession extends Model<ProfessionAttributes> implements ProfessionAttributes {
    public id_profession!: number;
    public name!: string;
    public description?: string;
    public status!: boolean;
}

Profession.init(
    {
        id_profession: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    },
    {
        sequelize,
        modelName: 'Profession',
        tableName: 'professions',
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
);

export default Profession;