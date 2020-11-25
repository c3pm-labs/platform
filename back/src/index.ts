import env from 'env-var';
import { PrismaClient } from 'nexus-plugin-prisma/client';

import Server from './Server';
import logger from './utils/logger';

const PORT = env.get('PORT').required().asPortNumber();

const db = new PrismaClient();

const server = new Server(db);

server.listen(PORT, () => {
  logger.info(`🚀 Server ready at: http://localhost:${PORT}`);
});
