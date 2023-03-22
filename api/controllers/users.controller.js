const User = require("../models/users.model");
const bcrypt = require('bcrypt');
const {validateEmail, validatePassword, usedEmail} = require('../utils/validators');
const { generateToken } = require('../utils/jwt');

function getUsers(req, res) {
    console.log("Esto es getUsers");
}
async function registerUser(req, res) {
    try {
        const newUser = new User(req.body);
        if(!validateEmail(newUser.email)) {
            return res.status(400).json({ message: "Email incorrecto" });
        }
        if(await usedEmail(newUser.email)) {
            return res.status(400).json({ message: "Email ya esta en uso" });
        }
        if(!validatePassword(newUser.password)) {
            return res.status(400).json({ message: "La clave incorrecta" });
        }
        newUser.password = bcrypt.hashSync(newUser.password, 10);
        const createdUser = await newUser.save();
        return res.status(201).json(createdUser);
    } catch(err) {
        return res.status(500).json(err);
    }
}
function loginUser(req, res) {
    console.log("Esto es login");
}
function logoutUser(req, res) {
    console.log("Esto es logout");
}
function updateUser(req, res) {
    console.log("Esto es updateUser");
}
function deleteUser(req, res) {
    console.log("Esto es deleteUser");
}

module.exports = { getUsers, registerUser, loginUser, logoutUser, updateUser, deleteUser };