const express = require('express');

require('dotenv').config();
require('./config/database');
require('./config/s3');

const app = express();
const port = process.env.PORT || 3000;

app.set('port', port);

app.use(express.json());

app.use('/collections', require('./routes/collections'));
app.use('/works', require('./routes/works'));
app.use('/photos', require('./routes/photos'));

app.listen(port, () => {
  console.log(`Valery Yershov Art V2 API listening on port ${port}`);
});
