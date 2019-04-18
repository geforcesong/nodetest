const { createLogger, format, transports } = require('winston');

const logger = createLogger({
    level: 'info',
    format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
      format.errors({ stack: true }),
      format.splat(),
      format.json()
    ),
    defaultMeta: { service: 'your-service-name' },
    transports: [
      //
      // - Write to all logs with level `info` and below to `combined.log`
      // - Write all logs error (and below) to `error.log`.
      //
      new transports.File({ filename: 'quick-start-error.log', level: 'error' }),
      new transports.File({ filename: 'quick-start-combined.log' })
    ]
  });

  logger.log({
    level: 'info',
    message: 'Pass an object and this works',
    additional: 'properties',
    are: 'passed along'
  });


  logger.error({
    level: 'info',
    message: 'Pass an object and this works',
    additional: 'properties',
    are: 'passed along',
    name: "george",
    age: 10
  });

