# sex-pomelo-logger

========

sex-pomelo-logger is a [log4js](https://github.com/nomiddlename/log4js-node) wrapper for [pomelo](https://github.com/NetEase/pomelo) which provides some useful features.  

## Installation

```bash
npm install @sex-pomelo/sex-pomelo-logger
```

## Features

### log prefix

besides category, you can output prefix as you like in your log  
prefix can be filename, serverId, serverType, host etc  
to use this feature, you just pass prefix params to getLogger function

```js
var logger = require('@sex-pomelo/sex-pomelo-logger').getLogger(category, prefix1, prefix2, ...);
```

 log output msg will output with prefix ahead

### get line number in debug

when in debug environment, you may want to get the line number of the log  
to use this feature, add this code

```js
process.env.LOGGER_LINE = true;
```

in pomelo, you just configure the log4js file and set **lineDebug** for true  

```json
{
  "appenders": {
    "console":{ "type":"console"},
    "con-log":{
        "type": "file",
        "filename": "${opts:base}/logs/con-log-${opts:serverId}.log",
        "maxLogSize": 1048576,
        "layout": {"type": "basic"},
        "backups": 5
    },
  },

  "categories": {
    "con-log": { "appenders": ["con-log"], "level":"all" },
    "pomelo": { "appenders": ["console","pomelo"], "level":"WARN" }
  }, 

  "reloadSecs": 10,

  "lineDebug": false
}
```

### log raw messages

in raw message mode, your log message will be simply your messages, no prefix and color format strings  
to use this feature, add this code  

```js
process.env.RAW_MESSAGE = true;
```

in pomelo, you just configure the log4js file and set **rawMessage** for true  

```json
{
  "appenders": {
    "console":{ "type":"console"},
    "con-log":{
        "type": "file",
        "filename": "${opts:base}/logs/con-log-${opts:serverId}.log",
        "maxLogSize": 1048576,
        "layout": {"type": "basic"},
        "backups": 5
    },
  },

  "categories": {
    "con-log": { "appenders": ["con-log"], "level":"all" },
    "pomelo": { "appenders": ["console","pomelo"], "level":"WARN" }
  }, 

  "reloadSecs": 10,

  "lineDebug": false
}
```

### dynamic configure logger level

in pomelo logger configuration file log4js.json, you can add reloadSecs option. The reloadSecs means reload logger configuration file every given time. For example

```json
{
 "reloadSecs": 30
}
```

the above configuration means reload the configuration file every 30 seconds. You can dynamic change the logger level, but it does not support dynamiclly changing configuration of appenders.

## Example

log.js

```js
var logger = require('@sex-pomelo/sex-pomelo-logger').getLogger('log', __filename, process.pid);

process.env.LOGGER_LINE = true;
logger.info('test1');
logger.warn('test2');
logger.error('test3');
```

## License

(The MIT License)

Copyright (c) 2012-2013 NetEase, Inc. and other contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
