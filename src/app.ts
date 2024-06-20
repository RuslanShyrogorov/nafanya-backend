import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import logger from 'morgan';

import { shoesRouter } from '@src/routes/api/shoes.router';

dotenv.config();

export const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(express.json());
app.use(cors());

app.use('/api/shoes', shoesRouter);

// error if not correct request
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Not Found' });
});

app.use(
  (
    err: { status?: number; message?: string },
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { status = 500, message = 'Server error' } = err;
    res.status(status).json({ message });

    next();
  }
);
