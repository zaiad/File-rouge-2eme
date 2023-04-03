const db = require("../../models");
const bcrypt = require("bcrypt");
const {main} = require("../../middlewares/mailer");
const storage = require("local-storage");
const jwt = require("jsonwebtoken");
// const generateOtp = require("../../otp/generateOtp");
// const sendOtp = require("../../otp/sendOtp");
// const verifyOtp = require("../../otp/verifyOtp");

const User = db.user;
const Role = db.role;

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res
        .status(400)
        .json({ message: "Please fill all fields to register" });
    // if (password != confirm_password)
    //   return res.status(400).json({ message: "password is not matched" });
    const findEmail = await User.findOne({ email });
    if (findEmail)
      return res.status(400).json({ message: "This email already exist" });
    if (!findEmail) {
      const hashPassword = await bcrypt.hash(password, 10);
      const clientRole = await Role.findOne({ name: "client" });
      const user = await User.create({
        name,
        email,
        password: hashPassword,
        roles: clientRole._id,
        verification: false,
        status: true,
      });

      if (user) {
        main("register", user);
        return res.json({
          message: "Successfully, Check your email to active your account",
          email: email,
          password: hashPassword,
        });
      }
    else{
      res.send("User not created try again");
    }
    
    }
  } catch (error) {
    // console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  const { body } = req;
  if (!body.email || !body.password)
    return res.status(400).json({ message: "Please fill all fields to login" });
  const login_user = await User.findOne({ email: body.email });
  if (
    !login_user ||
    !(await bcrypt.compare(body.password, login_user.password))
  )
    return res.status(400).json({ message: "Email or password is incorect" });
  // if (!login_user.verification) throw Error("Check your email to active your account");
  // if (!login_user.status) throw Error("You can't to login");
  const token = await jwt.sign({ _id: login_user._id }, process.env.SECRET);
  storage("token", token);
  const login_user_role = await Role.findById(login_user.roles);
  res.json({
    message: "Login success",
    username: login_user.username,
    _id: login_user._id,
    email: login_user.email,
    role: login_user_role.name,
    token: storage("token"),
  });
};

const forgotPassword = async (req, res) => {
  const email = req.body.email;
  if (!email) res.status(400).json({ message: "Enter your email" });
  const forget_password_email = await User.findOne({ email: email });
  if (!forget_password_email)
    return res.status(400).json({ message: "User not found" });
  mailer.main("forgotPassword", forget_password_email);
  res.json({ message: "Check your email" });
};

const verifyForgotPassword = async (req, res) => {
  const token = req.params.token;
  const verify_token = await jwt.verify(token, process.env.SECRET);
  const verify_token_email = await User.findOne(verify_token.email);
  const new_token = await jwt.sign(
    { id: verify_token_email._id },
    process.env.SECRET
  );
  storage("new_token", new_token);
  // res.redirect("http://localhost:3000/form-forgot-password");
  return res.send(new_token);
};

const formForgotPassword = async (req, res) => {
  const { password, confirm_password } = req.body;
  const token = storage("new_token");
  // return res.send(token);
  if (!password || !confirm_password)
    return res
      .status(400)
      .json({ message: "Fill the all fields to Change your password" });
  if (password != confirm_password)
    res.status(400).json({ message: "is not same" });
  const verify_form_token = await jwt.verify(token, process.env.SECRET);
  // return res.send(verify_form_token);
  const find_forget_user = await User.findById(verify_form_token.id);
  if (!find_forget_user)
    return res
      .status(400)
      .json({ message: "Error, User not found, replay to check your email" });
  const hash_forgot_password = await bcrypt.hash(password, 10);
  const update_forgot_password = await User.updateOne(
    { _id: find_forget_user._id },
    { $set: { password: hash_forgot_password } }
  );
  res.json({
    message: "Your password is updated",
    email: find_forget_user.email,
    password: password,
  });
};

const resetPassword = async (req, res) => {
  const { body } = req;
  if (!body.last_password || !body.new_password || !body.confirm_new_password)
    return res
      .status(400)
      .json({ message: "Fill the all fields to reset your password" });
  if (body.confirm_new_password != body.new_password)
    res.status(400).json({ message: "password is not matched" });
  const token_reset = storage("token");
  const user_reset = await jwt.verify(token_reset, process.env.SECRET);
  const find_user_reset = await User.findById(user_reset._id);
  const verify_last_password = await bcrypt.compare(
    body.last_password,
    find_user_reset.password
  );
  if (!verify_last_password)
    return res.status(400).json({ message: "Your password is incorrect" });
  const hash_new_password = await bcrypt.hash(body.new_password, 10);
  const update_reset_password = await User.updateOne(
    { _id: find_user_reset._id },
    { $set: { password: hash_new_password } }
  );
  if (!update_reset_password) res.status(400).json({ message: "Error" });
  res.json({ message: "Your password is changed" });
};

const logout = async (req, res) => {
  storage.clear();
  res.send(true);
};

// const verifyEmail = async (req, res) => {
//   const verify_email = await jwt.verify(req.params.token, process.env.SECRET)
//   const verify_user = await User.findOne({email: verify_email.email})
//   if(verify_user.verification == true) res.redirect('http://localhost:3000/login')

//   const verification_email = await User.updateOne({ email: verify_email.email }, { $set: { verification: true } });
//   if (!verification_email) res.redirect("http://localhost:3000/login");
// }

module.exports = {
  register,
  login,
  resetPassword,
  forgotPassword,
  verifyForgotPassword,
  formForgotPassword,
  logout,
  // verifyEmail,
  // verify,
};
