import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { initializeModels } from '../models/init-models';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
);

initializeModels(sequelize);

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
        
        await sequelize.sync({ force: false });
        console.log('Database tables synchronized.');
        
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export { sequelize };