import { Request, Response } from 'express-serve-static-core';

import { Shoes } from '@src/models/shoesModel';
import { HttpError } from '@src/helpers';

export async function getShoes(req: Request, res: Response) {
  const limit = Number(req.query.limit) || 10;
  // const gender = req.query.gender || '';
  // const season = req.query.season || '';
  const result = await Shoes.find().limit(limit);
  res.json(result);
}

export async function getShoesById(req: Request, res: Response) {
  const { id } = req.params;
  const result = await Shoes.findById(id).exec();
  res.json(result);
}

export async function createShoes(req: Request, res: Response) {
  const result = await Shoes.create(req.body);
  res.status(201).json(result);
}

export async function updateShoes(req: Request, res: Response) {
  const { id } = req.params;
  const result = await Shoes.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw new HttpError(400, 'Not Found');
  }
  res.json(result);
}

export async function deleteShoes(req: Request, res: Response) {
  const { id } = req.params;
  const result = await Shoes.findByIdAndDelete(id).exec();
  if (!result) {
    throw new HttpError(400, 'Not Found');
  }
  res.json({ message: 'Delete successfully.' });
}
