const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const mongoDB = process.env.MONGO_DB;

const connect = async () => {
  try {
    const db = await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = db.connection;
    console.log(`Conectado a la DB 👀: ${name} en el host❤️: ${host}`);
  } catch (error) {
    console.error(`No se ha podido conectar a la DB 💔`, error);
  }
};

module.exports = { connect };
