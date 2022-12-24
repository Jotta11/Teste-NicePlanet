import { ObjectId } from 'mongodb';
import { model, Schema } from 'mongoose';

export const Propriedades = model('Propriedades', new Schema({
  id: ObjectId,
  name: String,
  numeroCadastro: String,
  tipoPropriedade: String,
}));
