const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, enum: ['admin', 'driver', 'passenger'], required: true },
});

module.exports = mongoose.model('user', userSchema);
