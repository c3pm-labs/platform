import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.combine(format.colorize(), format.simple(), format.timestamp()),
  transports: [new transports.Console()],
});

export default logger;
