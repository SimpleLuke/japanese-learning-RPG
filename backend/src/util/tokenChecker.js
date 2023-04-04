const JWT = require("jsonwebtoken");

const tokenChecker = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    JWT.verify(token, 'SECRET', (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Token is not valid' });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(401).json({ error: 'Authorization header is missing' });
  }
};

global.tokenChecker = tokenChecker;