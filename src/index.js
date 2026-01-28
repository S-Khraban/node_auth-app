import { createApp } from './app.js';
import { env } from './config/env.js';
import { sequelize } from './config/db.js';
import './models/index.js';

async function startServer() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    const app = createApp();

    app.listen(env.PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Server is running on port ${env.PORT}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
