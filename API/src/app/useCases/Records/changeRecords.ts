import { Request, Response } from 'express';

import { Records } from '../../models/Registro'


export async function changeRecords(req: Request, res: Response) {
  try {
    const { recordsId } = req.params;

    // Aqui eu coloquei um parametro para corrigir um erro meu, porém para alterar qualquer outro parametro é só coloca-lo dentro das chaves.
    const { nomePropriedade } = req.body;
    await Records.findByIdAndUpdate(recordsId, { nomePropriedade });

    res.sendStatus(204);
  } catch {
    res.status(500)
  }
};