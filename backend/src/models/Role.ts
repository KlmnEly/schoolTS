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

export default Role;