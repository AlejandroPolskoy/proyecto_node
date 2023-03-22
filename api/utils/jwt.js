const jwt = require("jsonwebtoken");

function generateToken(id, email) {
    return jwt.sign({id, email}, process.env.JWT_KEY, {expiresIn: "1d"});
}

function verifyToken(token) {
    return jwt.verify(token, process.env.JWT_KEY);
}

module.exports = { generateToken, verifyToken };