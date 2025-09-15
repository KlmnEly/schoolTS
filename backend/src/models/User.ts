import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export interface UserAttributes {
    id_user?: number;
    role_id: number;
    username: string;
    password: string;
    status: boolean;
}

class User extends Model<UserAttributes> implements UserAttributes {
    public id_user!: number;
    public role_id!: number;
    public username!: string;
    public password!: string;
    public status!: boolean;
}

User.init(
    {
        id_user: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'roles',
                key: 'id_role'
            }
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
);

export default User;