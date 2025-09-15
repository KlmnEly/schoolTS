import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export interface Document_typeAttributes {
    id_document_type?: number;
    name: string;
    status: boolean;
}

class Document_type extends Model<Document_typeAttributes> implements Document_typeAttributes {
    public id_document_type!: number;
    public name!: string;
    public status!: boolean;
}

Document_type.init(
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
        modelName: 'Document_type',
        tableName: 'document_types',
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
);

export default Document_type;