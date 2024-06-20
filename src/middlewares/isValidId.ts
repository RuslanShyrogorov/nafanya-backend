import { isValidObjectId } from 'mongoose';
import { Request, Response, NextFunction } from 'express-serve-static-core';

import { HttpError } from '@src/helpers';

export const isValidId = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    next(new HttpError(400, `${id} is invalid`));
  }
  next();
};
