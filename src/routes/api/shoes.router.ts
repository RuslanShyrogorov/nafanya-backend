import { Router } from 'express';

import { ctrl } from '@src/controllers';
import { isValidId } from '@src/middlewares';

export const shoesRouter = Router();

shoesRouter.get('/', ctrl.getShoes);
shoesRouter.get('/:id', isValidId, ctrl.getShoesById);
shoesRouter.post('/', ctrl.createShoes);
shoesRouter.put('/:id', isValidId, ctrl.updateShoes);
shoesRouter.delete('/:id', isValidId, ctrl.deleteShoes);
