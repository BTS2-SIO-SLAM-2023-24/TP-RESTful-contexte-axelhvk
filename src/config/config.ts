import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose.set('strictQuery', false);

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_URL = 'mongodb+srv://...:<password>@cluster0.jdnafag.mongodb.net/?retryWrites=true&w=majority';

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3000;

export const config = {
    mongo: {
        username: MONGO_USERNAME,
        password: MONGO_PASSWORD,
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
};

