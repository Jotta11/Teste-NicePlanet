import { Request, Response } from 'express';

import { Records } from '../../models/Registro'

  
export async function listDetails(req: Request, res: Response) {
  try {
    const detalhes = Records.find()

    res.json(detalhes);
  } catch {
    res.status(500)
  }
};