require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

const newToken = (user) => {
  return jwt.sign({ user }, "web14khushboo");
};

const register = async (req, res) => {
  try {
    // we will try to find the user with the email provided
    const user = await User.findOne({ email: req.body.email }).lean().exec();
    console.log("======", user);
    // if the user is found then it is an error
    if (user) return res.status(400).send({ message: "User already exists" });

    // if user is not found then we will create the user with the email and the password provided
    const newUser = await User.create(req.body);
    console.log("---------", newUser);
    // then we will create the token for that user
    const token = newToken(newUser);

    // then return the user and the token

    // res.send({ user, token });
    return res.status(201).json({
      msg: "User created successfully",
      name: newUser.name,
      profileImage: newUser.profileImage,
      token,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const login = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({ msg: "Please enter both email or password" });
    }

    // we will try to find the user with the email provided
    const user = await User.findOne({ email: req.body.email }).lean().exec();

    // If user is not found then return error
    if (!user) return res.status(400).send({ message: "User not Found" });

    // if user is found then we will match the passwords
    // const match = user.checkPassword(req.body.password);
    const match = bcrypt.compareSync(req.body.password, user.password);

    if (!match)
      return res
        .status(400)
        .send({ message: "Your Mail or Password is incorrect" });

    // then we will create the token for that user
    const token = newToken(user);

    // then return the user and the token
    return res.status(200).json({
      msg: "Login Successful",
      name: user.name,
      profileImage: user.profileImage,
      token,
    });
    // res.send({ user, token });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = { register, login, newToken };
