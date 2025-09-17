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

export default Subject;