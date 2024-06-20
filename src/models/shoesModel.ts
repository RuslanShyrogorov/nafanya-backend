import { Schema, model } from 'mongoose';

import { IShoes } from '@src/types';

const shoesSchema = new Schema<IShoes>({
  name: String,
  description: String,
  extraDescription: String,
  material: String,
  picture: [String],
  article: Number,
  price: Number,
  oldPrice: Number,
  sizes: {
    20: Number,
    21: Number,
    22: Number,
    23: Number,
    24: Number,
    25: Number,
    26: Number,
    27: Number,
    28: Number,
    29: Number,
    30: Number,
    31: Number,
    32: Number,
    33: Number,
    34: Number,
    35: Number,
    36: Number,
    37: Number,
    38: Number,
    39: Number,
  },
  quantity: Number,
  type: String,
  gender: [String],
  season: String,
});

export const Shoes = model<IShoes>('shoes', shoesSchema);
