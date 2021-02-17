const bodyParser = require("body-parser");
const authorRoutes = require("./author");
const bookRoutes = require("./book");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(authorRoutes);
  app.use(bookRoutes);
};
