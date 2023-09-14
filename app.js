const express = require('express');
const mongoose = require('mongoose');
const { DB_URL } = require('./props');
const bodyParser = require('body-parser');
const PersonRoutes = require('./routes/PersonRoutes');


const app = express();
mongoose.connect(DB_URL, { useNewUrlParser: true }).then(() => console.log('db connected'));

app.use(express());
app.use(express.json());
app.use(bodyParser.json());

app.use(PersonRoutes);

module.exports = app;