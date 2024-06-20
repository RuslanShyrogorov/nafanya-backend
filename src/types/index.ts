import { ObjectId } from 'mongodb';

export interface ISizes {
  [size: number]: number;
}

export interface IShoes extends Document {
  _id: ObjectId;
  name: string;
  description: string;
  extraDescription: string;
  material: string;
  picture: string[];
  article: number;
  price: number;
  oldPrice: number;
  sizes: ISizes;
  quantity: number;
  type: string;
  gender: string[];
  season: string;
}
