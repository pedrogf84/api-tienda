const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];

    const { error } = schema.validate(data, { abortEarly: false }); //abortEarly: false -> envía todos los errors, no solo el primero.
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = validatorHandler;
