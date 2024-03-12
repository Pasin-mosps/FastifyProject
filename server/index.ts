import { FastifyServerOptions } from 'fastify'
import buildApp  from "./src/app";
import config from './src/config';

const options: FastifyServerOptions = {
    logger: true
}

const app = buildApp(options)

const start = async () => {
    try {
      await app.listen(config)
    } catch (err) {
      app.log.error(err)
      process.exit(1)
    }
  }
  start()