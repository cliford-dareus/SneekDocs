import express, { Request, Response } from 'express';
import connectDB from './db/connect';
import helmet from 'helmet';
import dotenv from 'dotenv';
dotenv.config();

import authRoute from './routes/auth';

const app = express();

app.use(helmet());
app.use(express.json());

app.use('/api/v1/auth', authRoute);

app.get('/', (req: Request, res: Response) => {
    res.send('Cliford ');
});

const PORT = process.env.PORT;
const start =async () => {
    try {
        await connectDB(process.env.MONGO_URI!);
        app.listen(PORT , () => console.log(`Listening on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};

start();
