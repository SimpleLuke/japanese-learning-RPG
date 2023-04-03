const tokenChecker = (req, res, next) => {
  let token;
  const authHeader = req.get("Authorization");

  if (authHeader) {
    token = authHeader.slice(7);
  }

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
};

export {tokenChecker};