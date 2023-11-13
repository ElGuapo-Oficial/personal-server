import express from 'express';
import { Request, Response } from 'express';
import infoRoutes from './routes/index';

const app: express.Application = express();
const port = 3001;

app.use(infoRoutes);
app.use('/', (req: Request, res: Response)=> {
  res.send("Hola Mundo");
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});