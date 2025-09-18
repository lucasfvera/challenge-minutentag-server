import express from 'express';
import { router } from './routes/index.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
    res.send(':)');
});

app.use('/api', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
