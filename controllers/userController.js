const userService = require('../services/userService');
const errorHandler = require('../utils/errorHandler');

exports.getAllUsers = async (req, res) => {
  try {
    const result = await userService.getAllUsers();
    res.status(200).json(result);
  } catch (error) {
    errorHandler(res, error);
  }
};
