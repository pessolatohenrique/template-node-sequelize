const bodyParser = require("body-parser");
const author = require("./author");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(author);
};
