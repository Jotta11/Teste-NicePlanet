import { Request, Response } from 'express';

import { Records } from '../../models/Registro'


export async function createRecords(req: Request, res: Response) {
  try {
    const {nomePropriedade, numeroCadastro, nomeProdutor, CPF, dataMonitoramento, analista, resultado,detalhes} = req.body;

    const records = await Records.create({
      nomePropriedade,
      numeroCadastro,
      nomeProdutor,
      CPF,
      dataMonitoramento,
      analista,
      resultado,
      detalhes,
    }); 
    res.status(201).json(records);
    
  } catch {
    res.status(500)
  }
};


