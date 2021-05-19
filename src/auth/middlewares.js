const passport = require("passport");

module.exports = {
  local: (req, res, next) => {
    passport.authenticate("local", { session: false }, (error, user, info) => {
      console.log(error);
      if (error) {
        return res.status(401).json(error);
      }
      req.user = user;
      return next();
    })(req, res, next);
  },
};
