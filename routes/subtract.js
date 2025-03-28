const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { num1, num2 } = req.query;
  const logger = req.app.locals.logger;

  if (isNaN(num1) || isNaN(num2)) {
    const error = 'Invalid input: num1 and num2 must be numbers.';
    logger.error(error);
    return res.status(400).json({ error });
  }

  const result = parseFloat(num1) - parseFloat(num2);
  logger.info(`Subtraction: ${num1} - ${num2} = ${result}`);
  res.json({ result });
});

module.exports = router;
