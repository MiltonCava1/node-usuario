import express from 'express'; //importamos express
import indexRoutes from '../src/routes/index.routes.js';

const app = express();//inicializamos express
//app.use(express.json());
app.use(indexRoutes);
export default app;