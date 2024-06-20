import { Request, Response } from 'express-serve-static-core';

import { Shoes } from '@src/models/shoes';

export async function getShoes(req: Request, res: Response) {
  const result = await Shoes.find();
  // const limit = req.query.limit || 10;
  //
  // res.send([{ total: limit }, limit]);
  res.json(result);
}

export function getShoesById(req: Request, res: Response) {
  const { id } = req.params;
  res.send({ id });
}
