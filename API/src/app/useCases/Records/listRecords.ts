import { Request, Response } from 'express';

import { Records } from '../../models/Registro'


export async function listRecords (req: Request, res: Response) {
  const records = await Records.find();

  res.json(records);
};