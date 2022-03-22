const express = require('express');

const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');
const orderRouter = require('./orders.router');

function routerApi(app) {
  //se crea una ruta maestra para hacer más sencillo el control de versiones.
  const router = express.Router();
  app.use('/api/v1', router); //esto genera un endpoint igual para todos los enlaces inferiores.

  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/orders', orderRouter);
}

module.exports = routerApi;
