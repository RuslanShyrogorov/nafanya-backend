import { Schema, model } from 'mongoose';
import { ObjectId } from 'mongodb';
// import Joi from 'joi';
// import { NextFunction } from 'express';

import { IShoes } from '@src/types';

const typeList = ['slippers', 'boots', 'insoles'];
const genderList = ['boy', 'girl'];
const seasonList = ['демісезонні', 'літо', 'зима'];

const shoesSchema = new Schema<IShoes>(
  {
    _id: ObjectId,
    name: { type: String, required: true },
    description: { type: String, required: true },
    extraDescription: { type: String, default: '' },
    material: { type: String, required: true },
    picture: [String],
    article: { type: Number, required: true, unique: true },
    price: { type: Number, required: true },
    oldPrice: Number,
    sizes: { type: Map, of: Number },
    quantity: { type: Number, required: true },
    type: {
      type: String,
      required: true,
      enum: typeList,
    },
    gender: { type: [String], required: true, enum: genderList },
    season: {
      type: String,
      required: true,
      enum: seasonList,
    },
  },
  { versionKey: false, timestamps: true }
);

// !need create middleware and connect it to route
// const sizesSchema: Record<number, any> = {};
//
// for (let i = 20; i <= 39; i = +1) {
//   sizesSchema[i] = Joi.number();
// }
//
// export const shoesJoeSchema = Joi.object({
//   name: Joi.string().required(),
//   description: Joi.string().required(),
//   extraDescription: Joi.string().default(''),
//   material: Joi.string().required(),
//   picture: Joi.array().items(Joi.string()),
//   article: Joi.number().required(),
//   price: Joi.number().required(),
//   oldPrice: Joi.number(),
//   sizes: Joi.object(sizesSchema).required(),
//   quantity: Joi.number().required(),
//   type: Joi.string()
//     .valid(...typeList)
//     .required(),
//   gender: Joi.array()
//     .items(Joi.string().valid(...genderList))
//     .required(),
//   season: Joi.string()
//     .valid(...seasonList)
//     .required(),
// });

// ! need to figure out, how create this middleware with typescript
// shoesSchema.post(
//   'save',
//   (
//     error: { status: (status: number) => void },
//     date: IShoes,
//     next: NextFunction
//   ) => {
//     error.status(400);
//     next();
//   }
// );

export const Shoes = model<IShoes>('shoe', shoesSchema);
