const JWT = require("jsonwebtoken");
const secret = "SECRET";

class TokenGenerator {
  static jsonwebtoken(user_id) {
    return JWT.sign(
      {
        user_id: user_id,
        iat: Math.floor(Date.now() / 1000),

        // Set the JWT token to expire in 10 minutes
        exp: Math.floor(Date.now() / 1000) + 500 * 60,
      },
      secret
    );
  }
}

module.exports = TokenGenerator;
