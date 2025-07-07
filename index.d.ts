import { Log4js } from "log4js";
import { Sequelize, Options as SeqOpt, Dialect as SeqDial } from "sequelize/types";
import { DataManagerConfig } from "./lib/dataManager";


/**
 * Logger class
 * 
 * 
 * 
 * @example
 *   const logger = getLogger('comm');
 *   logger.info('test1 %d %s', 1, 'hello');
 * @endexample
 */
declare class Logger{
    log(message: any, ...args: any[]): void;
    trace(message: any, ...args: any[]): void;

    debug(message: any, ...args: any[]): void;

    /**
     * @example
     *   logger.info('test1 %d %s', 1, 'hello');
     * @endexample
     */
    info(message: any, ...args: any[]): void;

    warn(message: any, ...args: any[]): void;

    error(message: any, ...args: any[]): void;

    fatal(message: any, ...args: any[]): void;

    mark(message: any, ...args: any[]): void;
}

/**
 * getLogger instance， 支持多个前缀
 * @example
 *   getLogger('comm')
 *   getLooger('comm',__filename, process.id)
 * 
 * @endexample
 * 
 * @param {string} categoryName logger catename
 */
declare const getLogger: ( categoryName: string ) => Logger;

/** 
 * Configure the logger.
 * Configure file just like log4js.json. And support ${scope:arg-name} format property setting.
 * It can replace the placeholder in runtime.
 * scope can be:
 *     env: environment variables, such as: env:PATH
 *     args: command line arguments, such as: args:1
 *     opts: key/value from opts argument of configure function
 * 
 * @param  {string|object} config configure file name or configure object
 * @param  { Record<string, any>} opts   options
 * @return {void}
 */
declare const configure: ( config: string, opts: Record<string, any> ) => void;

export = {getLogger,configure, Logger};

