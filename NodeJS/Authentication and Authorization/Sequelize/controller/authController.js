// controllers/authController.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userMOdel');

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user1 = await User.findOne({ where: { username } });
    if (user1) return res.sendStatus(404);

    const user = await User.create({ username, password: hashedPassword });

    const token = jwt.sign({ username: user.username, id: user.id }, 'DBBDBDKBKDBKDBKB', {
      expiresIn: '1h'});
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) return res.sendStatus(404);

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return res.sendStatus(401);

    const token = jwt.sign({ username: user.username, id: user.id }, 'DBBDBDKBKDBKDBKB');
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { registerUser, loginUser };
