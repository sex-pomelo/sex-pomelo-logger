const plogger = require('../lib/logger.js');

//var logger = require('@sex-pomelo/sex-pomelo-logger').getLogger('log', __filename, process.pid);
plogger.configure({
    appenders: {
      console: { type: 'console' },
      cheeseLogs: { 
        type: 'file', 
        filename: '${opts:serverId}_cheese.log',
        layout: { type: 'colored' }
        //pattern:"gameDebug",
        //alwaysIncludePattern: false
      }
      
    },
    categories: {
      cheese: { appenders: ['console','cheeseLogs'], level: 'error' },
      another: { appenders: ['console'], level: 'warn' },
      default: { appenders: ['console', 'cheeseLogs'], level: 'trace' }
    }
  },{serverId:'gate-1'});

 let logger = plogger.getLogger('cheese');

process.env.LOGGER_LINE = true;
logger.info('test1');
logger.warn('test2');
logger.error('test3');
logger.fatal('test fatal');