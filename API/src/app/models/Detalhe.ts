import { ObjectId } from 'mongodb';
import { model, Schema } from 'mongoose';

export const Details = model('Details', new Schema({
  analise: {
    type: String,
    ref: 'Monitoramento',
  },
  idPropriedade: {
    type: String,
    ref: 'Propriedades',
  },
  tipoPropriedade: {
    type: String,
    ref: 'Propriedades',
  },
  idProdutor: {
    type: String,
    ref: 'Produtores',
  },
  tipoVinculo: {
    type: String,
    ref: 'Vinculo',
  },

})); 