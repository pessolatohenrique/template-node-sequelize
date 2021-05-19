const passport = require("passport");
const User = require("../models").User;
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

passport.use(
  new LocalStrategy(async function (username, password, done) {
    const user = await User.findOne({
      where: { username },
    });

    if (!user) {
      done("This user doesnt exists", null);
    }

    const verifyPassword = await bcrypt.compare(password, user.password);

    if (!verifyPassword) {
      done("Invalid username or password", null);
    }

    return done(null, user);
  })
);
