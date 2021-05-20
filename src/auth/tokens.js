const jwt = require("jsonwebtoken");
const ACCESS_EXPIRES_IN = "15m";

module.exports = {
  access: {
    create(id) {
      const payload = { id };
      return jwt.sign(payload, process.env.JWT_KEY, {
        expiresIn: ACCESS_EXPIRES_IN,
      });
    },
  },
};
