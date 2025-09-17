import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export interface DocumentTypeAttributes {
    id_document_type?: number;
    name: string;
    status: boolean;
}

class DocumentType extends Model<DocumentTypeAttributes> implements DocumentTypeAttributes {
    public id_document_type!: number;
    public name!: string;
    public status!: boolean;
}

export default DocumentType;