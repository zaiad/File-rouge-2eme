const db = require("../../models");
const mailer = require("../../middlewares/mailer");
const jwt = require("jsonwebtoken");
// var storage = require("local-storage");
const bcrypt = require("bcrypt");

const User = db.user;
const Role = db.role;

const getUsers = async (req, res) => {
  const get_users = await User.find().populate("roles");
  let getUser = get_users.filter(
    (role) => role.roles[0].name == "client" || role.roles[0].name == "livreur"
  );
  res.json(getUser);
};
const getOneUser = async (req, res) => {
  let id = req.params.id;
  const user = await User.findById(id);
  // res.send(user)
  user.status = !user.status;
  await user.save();
  res.json(user.status);
};

const AddLivreur = async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "all fiels id required" });
  }
  let password = Math.random().toString(36).substr(2, 8);
  //   console.log(password);
  const double = await User.findOne({ email: email }).exec();
  //   res.send(double);
  if (double)
    return res.status(409).json({ message: "This email already exist" });
  const role = await Role.findOne({ name: "livreur" });
  let hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    verification: true,
    status: true,
    roles: role._id,
    password: hashedPassword,
  });
  if (user) {
    mailer.main("addLivreur", { name: user.name, email: user.email, password });
    res.json({
      message: "Successfully, An email has been sent to your account",
      email: user.email,
      password: password,
    });
  } else {
    res.status(400).json({ message: "User not created try again" });
  }
};

module.exports = {
  getUsers,
  getOneUser,
  AddLivreur,
};
