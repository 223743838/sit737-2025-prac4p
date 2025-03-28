const express = require('express');
const winston = require('winston');
const app = express();
const PORT = 3000;

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'calculator-microservice' },
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

app.locals.logger = logger;


app.use('/add', require('./routes/add'));
app.use('/subtract', require('./routes/subtract'));
app.use('/multiply', require('./routes/multiply'));
app.use('/divide', require('./routes/divide'));


app.listen(PORT, () => {
  logger.info(`Calculator microservice running at http://localhost:${PORT}`);
});
