import { ObjectId } from 'mongodb';
import { model, Schema } from 'mongoose';

export const Vinculo = model('Vinculo', new Schema({
  id: String,
  tipoVinculo: String,
  idProdutores: {
    type: String,
    ref: 'Produtores',
  },
}));

