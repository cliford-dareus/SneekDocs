import express, { Request, Response } from 'express';
import connectDB from './db/connect';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
dotenv.config();

import authRoute from './routes/auth';
import docRouter from './routes/doc';

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded())

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/user', docRouter);

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
