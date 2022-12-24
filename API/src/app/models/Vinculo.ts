import { ObjectId } from 'mongodb';
import { model, Schema } from 'mongoose';

export const Vinculo = model('Vinculo', new Schema({
  id: ObjectId,
  tipoVinculo: String,
  idProdutores: {
    type: Schema.Types.ObjectId,
    ref: 'Produtores',
  },
}));

