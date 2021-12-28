const secret = require("crypto").randomBytes(64).toString("hex");

module.exports = {
  port: 3000,
  db_user: "chat_server",
  db_password: "chatpassword",
  db_database: "chat_app",
  db_host: "localhost",
  jwt_key: secret,
};
