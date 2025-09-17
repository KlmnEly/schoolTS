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

export default Profession;