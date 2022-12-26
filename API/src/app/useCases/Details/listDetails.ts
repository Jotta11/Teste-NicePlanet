import { Request, Response } from 'express';

import { Details } from '../../models/Detalhe'


export async function listDetails(req: Request, res: Response) {
  try {
    const details = await Details.find();

    res.json(details);
  } catch {
    res.status(500)
  }
};