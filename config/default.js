const secret = require("crypto").randomBytes(64).toString("hex");

module.exports = {
  jwt_key: secret,
};
