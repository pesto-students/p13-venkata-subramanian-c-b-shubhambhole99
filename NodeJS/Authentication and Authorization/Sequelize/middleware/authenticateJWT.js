// middleware/authenticateJWT.js

const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  let token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized - Missing Token' });
  }

  if (token.startsWith('Bearer ')) {
    // Remove the 'Bearer ' prefix and return the actual token
  console.log(token)
   token=token.slice(7);
  }
  jwt.verify(token, 'DBBDBDKBKDBKDBKB', (err, user) => {
    console.log(token,user,err)
    if (err) {
      return res.status(403).json({ error: 'Forbidden - Invalid Token' });
    }

    req.user = user;
    next();
  });
};

module.exports = authenticateJWT;
