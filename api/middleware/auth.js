const { verifyToken } = require("../utils/jwt");
const User = require("../models/users.model");

async function isAuth(req, res, next) {
    try {
        //const autorization = req.headers.autorization;
        const autorization = req.body.token || req.headers.authorization;

        if(!autorization) {
            return res.status(200).json( { message: "Usuario no autorizado" } )
        }

        const token = autorization.split(" ")[1];
        if(!token) {
            return res.status(401).json({ message: "Token irroneo" })
        }

        let tokenVerified = verifyToken(token, process.env.JWT_KEY);
        if(!tokenVerified.id) {
            return res.status(401).json(tokenVerified);
        }

        const userLogged = await User.findById(tokenVerified.id);
        req.user = userLogged;

        next();
    } catch(err) {
        return res.status(500).json(err);
    }
} 

module.exports = {isAuth};