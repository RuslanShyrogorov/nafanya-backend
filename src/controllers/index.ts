import {
  getShoes,
  getShoesById,
  createShoes,
  updateShoes,
  deleteShoes,
} from '@src/controllers/shoesController';
import { ctrlWrapper } from '@src/helpers';

export const ctrl = {
  getShoes: ctrlWrapper(getShoes),
  getShoesById: ctrlWrapper(getShoesById),
  createShoes: ctrlWrapper(createShoes),
  updateShoes: ctrlWrapper(updateShoes),
  deleteShoes: ctrlWrapper(deleteShoes),
};
