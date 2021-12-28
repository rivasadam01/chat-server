const router = require("express").Router();
const { login, register } = require("../controllers/auth");
const { rules: registrationRules } = require("../validators/auth/register");
const { rules: loginRules } = require("../validators/auth/login");
const { validate } = require("../validators");

//@ts-ignore
router.post("/login", [loginRules, validate, login]);
//@ts-ignore
router.post("/register", [registrationRules, validate, register]);

module.exports = router;
