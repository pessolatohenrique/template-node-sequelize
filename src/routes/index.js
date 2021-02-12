const bodyParser = require("body-parser");
const authorRoutes = require("./author");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(authorRoutes);
};
