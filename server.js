const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const resourceRoutes = require('./routes/resources');

const app = express();

mongoose.connect('mongodb://localhost:27017/aks-vanilla-terraform', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(bodyParser.json());

app.use('/resources', resourceRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function () {
  console.log('Listening on port 3000');
});