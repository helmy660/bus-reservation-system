import { createConnection } from 'typeorm';
import * as process from 'process';
import app from './app';


const PORT = process.env.PORT || 3000;

export const startApp = (): void => {
  app
    .listen(PORT, () => {
        console.log(`app started on port ${PORT}`)
    })
    .on('error', async (err: Error) => {
      console.error('server#startApp', err.stack);
    });
};

createConnection()
  .then(() => startApp())
  .catch(async (err) => {
    console.error('server#createConnection', err.stack);
    process.exit(1);
});
