const User = require("../models").User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { jwt_key } = require("../startup/config");

module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    //find user in db
    const user = await User.findOne({
      where: {
        email,
      },
    });
    //check if user is found
    if (!user) return res.status(404).json({ message: "User not found!" });
    //check if password matches
    if (!bcrypt.compareSync(password, user.password))
      return res.status(401).json({ message: "Invalid credentials" });
    //generate auth token
    const token = generateToken(user.get({ raw: true }));
    return res.send(token);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

module.exports.register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = generateToken(user.get({ raw: true }));
    return res.send(token);
  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

const generateToken = (user) => {
  const token = jwt.sign(user, jwt_key, {
    expiresIn: "30m",
  });
  return { ...user, ...{ token } };
};
