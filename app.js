const express = require('express');
const mongoose = require('mongoose');
// require('dotenv').config();
const { DB_URL } = require('./props');
const bodyParser = require('body-parser');
const PersonRoutes = require('./routes/PersonRoutes');

// const DB_URL = process.env.DATABASE_URL;
const app = express();
mongoose.connect(DB_URL, { useNewUrlParser: true }).then(() => console.log('db connected'));
/* async function connectToDatabase() {
    try {
      await mongoose.connect(DB_URL, { useNewUrlParser: true });
      console.log('Database connected');
    } catch (error) {
      console.error('Error connecting to database:', error.message);
    }
}
connectToDatabase();
*/
  
  
  
  
  

app.use(express());
app.use(express.json());
app.use(bodyParser.json());

app.use(PersonRoutes);

module.exports = app;