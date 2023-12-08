const User = require('../models/User');
const errorHandler = require('../utils/errorHandler');

exports.getAllUsers = async () => {
  try {
    const users = await User.find({}, '-password');
    return users;
  } catch (error) {
    throw error;
  }
};
