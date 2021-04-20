import env from 'env-var';

import Server from './Server';
import logger from './utils/logger';

//const PORT = env.get('PORT').required().asPortNumber();
const PORT = 4000;
const server = new Server();

server.listen(PORT, () => {
  logger.info(`🚀 Server ready at: http://localhost:${PORT}`);
});
