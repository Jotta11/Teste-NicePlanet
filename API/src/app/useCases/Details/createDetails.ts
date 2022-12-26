import { Request, Response } from 'express';

import { Details } from '../../models/Detalhe'


export async function createDetails(req: Request, res: Response) {
  try {
    const { analise, idPropriedade, tipoPropriedade, idProdutor, tipoVinculo } = req.body;

    const details = await Details.create({ analise, idPropriedade, tipoPropriedade, idProdutor, tipoVinculo });

    res.status(201).json(details);
  } catch {
    res.status(500)
  }
};