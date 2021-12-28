const { body } = require("express-validator");

module.exports.rules = (() => {
  return [
    body("email").isEmail(),
    body("password").isLength({ min: 5, max: 256 }),
  ];
})();
