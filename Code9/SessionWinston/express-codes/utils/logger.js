var winston = require('winston');

winston.add(
  winston.transports.File, {
    filename: '/Users/amit/Documents/logs/apps.log',
    level: 'error',
    json: true,
    //eol: 'rn', // for Windows, or `eol: ‘n’,` for *NIX OSs
    timestamp: true
  }
)
module.exports = winston;
