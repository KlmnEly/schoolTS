import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export interface CourseAttributes {
  id_course?: number;
  name: string;
  description?: string;
  status: boolean;
}

class Course extends Model<CourseAttributes> implements CourseAttributes {
  public id_course!: number;
  public name!: string;
  public description?: string;
  public status!: boolean;
}

Course.init(
  {
    id_course: {
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
    modelName: 'Course',
    tableName: 'courses',
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"

  }
);

export default Course;