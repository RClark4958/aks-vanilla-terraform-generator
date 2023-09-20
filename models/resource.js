const mongoose = require('mongoose');

const ResourceSchema = mongoose.Schema({
  name: String,
  type: String
});

module.exports = mongoose.model('Resource', ResourceSchema);