import express from 'express';
import cors from 'cors';
import routes from './routes/index';
import { logger } from './utils/utils';

//init the app server with required param
const app = express();
const port = 3000;

// middleware to handle cors and logging
app.use(cors(), logger);

//respond to the default path to inform the user to use the correct path
app.get('/', (req, res) => {
  res.send('please use /api/v0/image');
});

//route to handle the app routes
app.use('/api/v0', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;
