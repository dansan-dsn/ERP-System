const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/users.model");

const createToken = (_id) => {
  try {
    const jwtkey = process.env.SECRET_KEY;
    return jwt.sign({ _id }, jwtkey, { expiresIn: "1h" });
  } catch (error) {
    throw new Error("Error generating token");
  }
};

const registerUser = async (req, res) => {
  const { email, phone_number, age, password } = req.body;

  try {
    // Validation
    if (!email || !phone_number || !age || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 5) {
      return res.status(400).json({ message: "Password is too short" });
    }

    const existingUser = await userModel.findOne({
      $or: [{ email }, { phone_number }],
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email or phone number in use already" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPwd = await bcrypt.hash(password, salt);

    const user = new userModel({
      email,
      password: hashedPwd,
      phone_number,
      age,
    });
    await user.save();

    // jwt token
    const token = createToken(user._id);

    return res.status(201).json({ _id: user._id, phone_number, email, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

const loginUser = async (req, res) => {
  const { email, phone_number, password } = req.body;
  try {
    if (!email && !phone_number) {
      return res
        .status(400)
        .json({ message: "Either email or phone number is required" });
    }

    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    const user = await userModel.findOne({
      $or: [{ email }, { phone_number }],
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = createToken(user._id);
    res.json({
      _id: user._id,
      email: user.email,
      phone_number: user.phone_number,
      token,
    });
  } catch (error) {
    console.log(error.message);
    res.staus(500).json({ message: "Server Error" });
  }
};

const fetchUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const fetchOneUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  fetchUsers,
  fetchOneUser,
};
