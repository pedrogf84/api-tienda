/*
THE FUNCTION LOGERROR -> Captures the error
*/

function logErrors(error, req, res, next) {
  console.error(error);
  next(error);
}

/*
THE FUNCTION ERRORHANDLER -> responses error message and stack in json
*/

function errorHandler(error, req, res) {
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}

/*
THE FUNCTION BOOM-ERROR-HANDLER -> if error is parametrized in boom
*/
function boomErrorHandler(error, req, res, next) {
  if (error.isBoom) {
    const { output } = error;
    res.status(output.statusCode).json(output.payload);
  }
  next(error);
}

module.exports = { logErrors, errorHandler, boomErrorHandler };
