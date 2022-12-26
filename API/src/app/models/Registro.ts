import { ObjectId } from 'mongodb';
import { model, Schema } from 'mongoose';

export const Records = model('Records', new Schema({
  recordsId: {
    type: ObjectId
  },
  nomePropriedade: {
    type: String,
    ref: 'Propriedades',
  },
  numeroCadastro: {
    type: String,
    ref: 'Propriedades',
  },
  nomeProdutor: {
    type: String,
    ref: 'Produtores',
  },
  CPF: {
    type: String,
    ref: 'Produtores',
  },
  dataMonitoramento: {
    type: Date,
    ref: 'Monitoramento',
  },
  analista: {
    type: String,
    ref: 'Monitoramento',
  },
  resultado: {
    type: String,
    ref: 'Monitoramento',
  },
}));