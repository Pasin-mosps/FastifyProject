import * as dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;

const config = {
    env: process.env.NODE_ENV || 'development',
    port: port
};


export default config