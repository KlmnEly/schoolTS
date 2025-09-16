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

DocumentType.init(
    {
        id_document_type: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(100),
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
        modelName: 'DocumentType',
        tableName: 'document_types',
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
);

export default DocumentType;