const redis = require("redis");
const manipulateList = require("./manipulate-list");
const forgotList = redis.createClient({ prefix: "forgotlist-token:" });
module.exports = manipulateList(forgotList);
