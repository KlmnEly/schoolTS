import express, { Application, Request, Response } from 'express';
import { connectDB } from './config/database';
import dotenv from 'dotenv';

import courseRoutes from './routes/CourseRoutes';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('¡Servidor de Node.js, Express y TypeScript funcionando!');
});

app.use('/api/v1/courses', courseRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
});