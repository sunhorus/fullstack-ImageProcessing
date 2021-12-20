import express from 'express';
import { image } from './image';

const routes = express.Router();

routes.use('/image', image);

export default routes;
