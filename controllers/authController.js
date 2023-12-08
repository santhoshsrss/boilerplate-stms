const authService = require('../services/authService');
const errorHandler = require('../utils/errorHandler');

exports.register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const result = await authService.registerUser(username, password, role);
    res.status(201).json(result);
  } catch (error) {
    errorHandler(res, error);
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await authService.loginUser(username, password);
    res.status(200).json(result);
  } catch (error) {
    errorHandler(res, error);
  }
};
