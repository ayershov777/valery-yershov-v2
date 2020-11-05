const mongoose = require('mongoose');

const uri = process.env.DB_URI.replace('<ENV_NAME>', process.env.ENV_NAME);

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log(`Connected to ${db.host}:${db.port}`);
});
