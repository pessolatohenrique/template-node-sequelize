const express = require("express");
const routes = require("./routes");
// necessary to load strategies
const { strategies } = require("./auth/strategies");

const app = express();
routes(app);
app.listen(3000, () => console.log("Server Started"));

module.exports = app;
