import { ObjectId } from 'mongodb';
import { model, Schema } from 'mongoose';

export const Produtores = model('Produtores', new Schema({
  id: ObjectId,
  name: String,
  nome: String,
  CPF: String,
}));
