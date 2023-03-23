const User = require("../models/users.model");
const bcrypt = require('bcrypt');
const {validateEmail, validatePassword, usedEmail} = require('../utils/validators');
const { generateToken } = require('../utils/jwt');

async function getUsers(req, res) {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch(err) {
        res.status(500).json(err);
    }
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
async function loginUser(req, res) {
    try {
        const userInfo = await User.findOne({ email: req.body.email})
        if(!userInfo) {
            return res.status(404).json({message: 'Email incorrecto'})
        }
        if(!bcrypt.compareSync(req.body.password, userInfo.password)) {
            return res.status(404).json({message: 'Clave incorrecto'});
        }
        const token = generateSign(userInfo._id, userInfo.email)
        return res.status(200).json({userInfo, token});
    } catch (error) {
        return res.status(500).json(error)
    }
}
function logoutUser(req, res) {
    console.log("Esto es logout");
}
async function updateUser(req, res) {
    //console.log("Esto es updateUser");
    try {
        const {id} = req.params;
        const userToUpdate = new User(req.body);
        userToUpdate._id = id;
        
        const userUpdated = await User.findByIdAndUpdate(id, userToUpdate, {new: true });
        if(!userUpdated) {
            return res.status(404).json({message: 'Usuario no encontrado'});
        }
        return res.status(200).json(userUpdated);
    } catch (error) {
        return res.status(500).json(error)
    }
}
async function deleteUser(req, res) {
    //console.log("Esto es deleteUser");
    try {
        const {id} = req.params;
        const userToDelete = await User.findByIdAndDelete();
        if(!userToDelete) {
            return res.status(404).json({ "message": "Usuario no encontrado" });
        }
        return res.status(200).json(userToDelete);
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = { getUsers, registerUser, loginUser, logoutUser, updateUser, deleteUser };