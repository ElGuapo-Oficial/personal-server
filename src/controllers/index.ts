import getInfoData from '../models/index';
import { Request, Response } from 'express';

const getInfo = (req: Request, res: Response) => {
  const data = getInfoData();
  res.send(data);
};

export { getInfo };