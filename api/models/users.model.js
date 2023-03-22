const mongoose = require("mongoose")

const userSchema = new mongoose.Schema (
    {
        nombre: {type: String, required: true},
        email: {type: String, required: true },
        password: {type: String, required: true },
        image: {type: String, required: false},
        role: {type: String, required: true, default: "cliente"}
    }
)

const User = mongoose.model("user", userSchema);

module.exports = User;