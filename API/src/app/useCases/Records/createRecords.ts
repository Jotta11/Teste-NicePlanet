import { Request, Response } from 'express';

import { Records } from '../../models/Registro'


export async function createRecords(req: Request, res: Response) {
  const { nomePropriedade, numeroCadastro, nomeProdutor, CPF, dataMonitoramento, analista, resultado } = req.body

  const records = await Records.create({ nomePropriedade, numeroCadastro, nomeProdutor, CPF, dataMonitoramento, analista, resultado });

  res.json(records);
};