const express = require("express");
const { isAuth, isAdmin } = require("../middleware/auth");
const upload = require("../middleware/upload.cloud");

const router = express.Router();

const {
    getUsers,
    registerUser,
    loginUser,
    logoutUser,
    updateUser,
    deleteUser
} = require("../controllers/users.controller");

router.get("/", isAdmin, getUsers);
router.post("/register", upload.single('image'), registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.put("/:id", [isAuth, upload.single('image')], updateUser);
router.delete("/:id", isAdmin, deleteUser);

module.exports = router;