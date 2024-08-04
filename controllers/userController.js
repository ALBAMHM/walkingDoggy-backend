const User = require('../models/User');

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user).select('-password_hash');
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};