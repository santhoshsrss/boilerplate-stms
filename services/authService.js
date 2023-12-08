const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { secret, expiresIn } = require('../config/jwt');

exports.registerUser = async (username, password, role) => {
  try {
    // Ensure that the provided role is one of the valid roles
    if (!['admin', 'driver', 'passenger'].includes(role)) {
      throw new Error('Invalid role.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword, role });
    await user.save();
    return { message: 'User registered successfully.' };
  } catch (error) {
    throw error;
  }
};

exports.loginUser = async (username, password, expectedRole) => {
  try {
    const user = await User.findOne({ username });

    if (!user) throw new Error('User not found.');

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) throw new Error('Invalid password.');

    // Ensure that the role of the logged-in user matches the expected role
    if (user.role !== expectedRole.toLowerCase()) {
      throw new Error('Invalid role during login.');
    }

    const token = jwt.sign({ username, role: user.role }, secret, { expiresIn });
    return { token };
  } catch (error) {
    throw error;
  }
};
