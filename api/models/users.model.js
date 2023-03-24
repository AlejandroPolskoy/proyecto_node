const mongoose = require("mongoose")

const userSchema = new mongoose.Schema (
    {
        nombre: {type: String, required: true},
        email: {type: String, required: true },
        password: {type: String, required: true },
        image: {type: String},
        role: {type: String, required: true, default: "cliente", enum: ["cliente", "admin"]},
        token: {type: String}
    }
)

const User = mongoose.model("user", userSchema);

module.exports = User;