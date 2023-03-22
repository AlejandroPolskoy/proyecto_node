const express = require("express");

const router = express.Router();

const {
    getUsers,
    registerUser,
    loginUser,
    logoutUser,
    updateUser,
    deleteUser
} = require("../controllers/users.controller");

router.get("/", getUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;