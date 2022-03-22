const express = require('express');
const cors = require('cors'); //allow different requests than from localserver:port
//const bodyParser = require('body-parser');
const routerApi = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');
const { connect } = require('./utils/connection/db');
const app = express();
connect();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//indica que orígenes podrán acceder a nuestra api
const whitelist = ['http://localhost:8080'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
};
app.use(cors(options));
//instance of routes/index.js
routerApi(app);
//instance error log, boom error handler and handling
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log('app started at port: ' + PORT);
});
