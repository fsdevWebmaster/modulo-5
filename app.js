require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());
app.use('/api', require('./routes/app.router'));

app.listen(process.env.PORT, () => {
  console.log(`backend listening at:${process.env.PORT}`);
})