import { Router } from 'express';

import { getShoes, getShoesById } from '@src/helpers/shoes';

export const shoesRouter = Router();

shoesRouter.get('/', getShoes);
shoesRouter.get('/:id', getShoesById);

// export default routerShoes;
