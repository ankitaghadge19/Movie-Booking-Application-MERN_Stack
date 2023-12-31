import Bookings from "../models/Bookings";
import User from "../models/User";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    return next(err);
  }

  if (!users) {
    return res.status(500).json({ message: "Unexpected error occurrd!" });
  }
  return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (
    !name &&
    name.trim === "" &&
    !email &&
    email.trim() === "" &&
    !password &&
    password.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid input data!" });
  }

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res.status(400).json({ message: "User already exist!" });
  }

  let user;
  const hashedPassword = bcrypt.hashSync(password);
  try {
    user = new User({ name, email, password: hashedPassword });
    user = await user.save();
  } catch (err) {
    return next(err);
  }
  if (!user) {
    return res.status(500).json({ message: "Unexpected error occurrd!" });
  }
  return res.status(201).json({ id : user._id });
};

export const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const { name, email, password } = req.body;
  if (
    !name &&
    name.trim === "" &&
    !email &&
    email.trim() === "" &&
    !password &&
    password.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid input data!" });
  }

  const hashedPassword = bcrypt.hashSync(password);
  let user;
  try {
    user = await User.findByIdAndUpdate(id, {
      name,
      email,
      password: hashedPassword,
    });
  } catch (err) {
    return console.log(err);
  }
  if (!user) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
  res.status(200).json({ message: "Updated Successfully!" });
};

export const deleteUser = async (req, res, next) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findByIdAndRemove(id);
  } catch (err) {
    consolr.log(err);
  }
  if (!user) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
  res.status(200).json({ message: "Deleted Successfully!" });
};

export const getBookingsOfUser = async (req, res, next) => {
  const id = req.params.id;
  let bookings;
  try{
    bookings = await Bookings.find({user: id});
  }catch(err){
    return console.log(err);
  }
  if(!bookings){
    return res.status(500).json({ message: "Unable to get Bookings!"});
  }
  return res.status(200).json({bookings});
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email && email.trim() === "" && !password && password.trim() === "") {
    return res.status(422).json({ message: "Invalid input data!" });
  }
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res
      .status(404)
      .json({ message: "Unable to find user from this Id!" });
  }
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect Password!" });
  }
  return res.status(200).json({ message: "Login Successfully!", id: existingUser._id });
};
