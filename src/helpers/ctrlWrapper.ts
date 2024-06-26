import { NextFunction, Request, Response } from 'express';

export const ctrlWrapper = (
  ctrl: (req: Request, res: Response, next: NextFunction) => void
) => {
  const func = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return func;
};
