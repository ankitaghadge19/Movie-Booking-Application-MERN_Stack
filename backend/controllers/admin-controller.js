import Admin from "../models/Admin";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const addAdmin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email && email.trim() === "" && !password && password.trim() === "") {
    return res.status(422).json({ message: "Invalid input data!" });
  }
  let existingAdmin;
  try {
    existingAdmin = await Admin.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingAdmin) {
    return res.status(400).json({ message: "Admin already exist!" });
  }

  let admin;
  const hashedPassword = bcrypt.hashSync(password);
  try {
    admin = new Admin({ email, password: hashedPassword });
    admin = await admin.save();
  } catch (err) {
    return console.log(err);
  }
  if (!admin) {
    return res.status(500).json({ message: "Unable to store admin!" });
  }
  return res.status(201).json({ admin });
};

export const adminLogin = async (req, res, next) => {
  const {email, password } = req.body;
  if (!email && email.trim() === "" && !password && password.trim() === "") {
    return res.status(422).json({ message: "Invalid input data!" });
  }

  let existingAdmin;
  try {
    existingAdmin = await Admin.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingAdmin) {
    return res.status(400).json({ message: "Admin not found!" });
  }

  const isPasswordCorrect = bcrypt.compareSync(
    password,
    existingAdmin.password
  );

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect Password!" });
  }

  const token = jwt.sign({ id: existingAdmin._id }, process.env.SECRETE_KEY, {
    expiresIn: "7d",
  });
  return res.status(200).json({
    message: "Authentication completed!",
    token,
    id: existingAdmin._id,
  });
};

export const getAllAdmins = async (req, res, next) => {
  let admins;
  try{
    admins = await Admin.find();
  }
  catch(err){
    return console.log(err);
  }
  if(!admins){
    return res.status(500).json({message: "Internal Server Error!"});
  }
  return res.status(200).json({admins});
}

export const updateAdmin = async (req, res, next) => {
  const id = req.params.id;
  const { email, password } = req.body;
  if (
    !email &&
    email.trim() === "" &&
    !password &&
    password.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid input data!" });
  }

  const hashedPassword = bcrypt.hashSync(password);
  let admin;
  try {
      admin = await Admin.findByIdAndUpdate(id, {
      email,
      password: hashedPassword,
    });
  } catch (err) {
    return console.log(err);
  }
  if (!admin) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
  res.status(200).json({ message: "Updated Successfully!" });
};
