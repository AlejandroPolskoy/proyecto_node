const Users = require("../models/users.model");

function getUsers(req, res) {
    console.log("Esto es getUsers");
}
function registerUser(req, res) {
    console.log("Esto es registerUser");
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