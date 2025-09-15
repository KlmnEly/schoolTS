import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export interface RoleAttributes {
    id_role?: number;
    name: string;
    status: boolean;
}

class Role extends Model<RoleAttributes> implements RoleAttributes {
    public id_role!: number;
    public name!: string;
    public status!: boolean;
}

Role.init(
    {
        id_role: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    },
    {
        sequelize,
        modelName: 'Role',
        tableName: 'roles',
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
);

export default Role;