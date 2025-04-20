const express = require("express");
const router = express.Router();
const authToken = require("../middleware/authToken");
const {
  registerUser,
  loginUser,
  fetchUsers,
  fetchOneUser,
} = require("../controllers/users.controller");

router.post("/register", registerUser);
router.post("/login", loginUser);

// protected routes
router.use(authToken);

router.get("/users", fetchUsers);
router.get("/users/:id", fetchOneUser);

module.exports = router;
