import mongoose from 'mongoose';
import * as process from 'node:process';

import { app } from './app';

const { DB_HOST, PORT } = process.env;

const connectDB = async () => {
  try {
    if (DB_HOST) {
      await mongoose.connect(DB_HOST);
    }
    app.listen(PORT, () => {
      console.log('Server running on port', PORT);
    });
    console.log('Database connection successful!');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
connectDB();
