import { Request, Response } from 'express';

import { Records } from '../../models/Registro'


export async function createRecords(req: Request, res: Response) {
  try {
    const { recordsId,nomePropriedade, numeroCadastro, nomeProdutor, CPF, dataMonitoramento, analista, resultado,} = req.body;

    const records = await Records.create({
      recordsId,
      nomePropriedade,
      numeroCadastro,
      nomeProdutor,
      CPF,
      dataMonitoramento,
      analista,
      resultado,
    }); 
    res.status(201).json(records);
  } catch {
    res.status(500)
  }
};


