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

export default User;