import express from 'express';
import cors from 'cors';
import routes from './routes/index'
import { logger } from './utils/utils';

const app = express();
const port = 5000;


app.use(cors, logger)
app.get('/', (req, res) => {
    res.send('please use /api/v0/image');
});

app.use('/api/v0/', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;