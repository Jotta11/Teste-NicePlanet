import { ObjectId } from 'mongodb';
import { model, Schema } from 'mongoose';

export const Monitoramento = model('Monitoramento', new Schema({
  id: ObjectId,
  name: String,
  dataMonitoramento: Date,
  analista: String,
  analise: String,
  resultado: {
    type: String,
    enum: ['LIBERADO', 'BLOQUEADO'],
  },
  idVinculo: {
    type: Schema.Types.ObjectId,
    ref: 'Vinculo',
  }
}));
