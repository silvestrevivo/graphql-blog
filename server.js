'use strict'

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' })
const Recipe = require('./models/Recipe');
const User = require('./models/User');

// Connect to data base
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('connected to DB Atlas'))
  .catch(err => console.error(err))
mongoose.set('useCreateIndex', true)

// Initializes application
const app = express();

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`)
})
