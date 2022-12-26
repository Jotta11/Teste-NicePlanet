import { Request, Response } from 'express';

import { Records } from '../../models/Registro'


export async function listRecords(req: Request, res: Response) {
  try {
    const records = await Records.find();

    res.json(records);
  } catch {
    res.status(500)
  }
};