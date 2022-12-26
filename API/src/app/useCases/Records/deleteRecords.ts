import { Request, Response } from 'express';

import { Records } from '../../models/Registro'


export async function deleteRecords(req: Request, res: Response) {
  try {
    const { recordsId } = req.params
    await Records.findByIdAndDelete(recordsId);
    res.sendStatus(204);
  } catch {
    res.status(500)
  }
};