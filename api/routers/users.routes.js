const express = require("express");
const { isAuth } = require("../middleware/auth");

const router = express.Router();

const {
    getUsers,
    registerUser,
    loginUser,
    logoutUser,
    updateUser,
    deleteUser
} = require("../controllers/users.controller");

router.get("/", isAuth, getUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.put("/:id", isAuth, updateUser);
router.delete("/:id", isAuth, deleteUser);

module.exports = router;