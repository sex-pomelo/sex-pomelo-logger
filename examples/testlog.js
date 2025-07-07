const plogger = require('../lib/logger.js');

//var logger = require('@sex-pomelo/sex-pomelo-logger').getLogger('log', __filename, process.pid);
plogger.configure({
    appenders: {
      cheeseLogs: { type: 'file', filename: 'cheese.log' },
      console: { type: 'console' }
    },
    categories: {
      cheese: { appenders: ['cheeseLogs'], level: 'error' },
      another: { appenders: ['console'], level: 'trace' },
      default: { appenders: ['console', 'cheeseLogs'], level: 'trace' }
    }
  });

 let logger = plogger.getLogger('log', __filename, process.pid);

process.env.LOGGER_LINE = 'true';
logger.info('test1 %d %s', 1, 'hello');
logger.warn('test2');
logger.error('test3');