import { createApp } from './app.js';
import { env } from './config/env.js';
import { sequelize } from './config/db.js';
import './models/index.js';

async function startServer() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    const app = createApp();

    app.listen(env.PORT);
  } catch (error) {
    process.exit(1);
  }
}

startServer();
