const passport = require("passport");

module.exports = {
  local: (req, res, next) => {
    passport.authenticate("local", { session: false }, (error, user, info) => {
      if (error) {
        return res.status(401).json(error);
      }
      req.user = user;
      return next();
    })(req, res, next);
  },
  bearer: (req, res, next) => {
    passport.authenticate("bearer", { session: false }, (error, user, info) => {
      if (error) {
        return res.status(401).json(error);
      }

      req.token = info.token;
      req.user = user;
      return next();
    })(req, res, next);
  },
};
