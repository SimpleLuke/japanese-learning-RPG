
const tokenChecker = (req, res, next) => {
  const authHeader = req.get("Authorization");

  if (authHeader) {
    token = authHeader.slice(7);
  }

  if (token) {
    JWT.verify(token, 'SECRET', (err, token) => {
      if (err) {
        console.log(err);
        res.status(401).json({ message: "auth error" });
      } else {
        req.user_id = token.user_id;
        res.json({message: "Verification ok."})
        next();
      }
    });
  } else {
    res.status(401).json({ message: "No token provided" });
  }
};

export {tokenChecker};