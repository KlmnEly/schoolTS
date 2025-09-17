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

export default Course;