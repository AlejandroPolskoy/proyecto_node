const express = require("express");
const dotenv = require("dotenv").config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})
const {connect} = require("./src/utils/database");

const PORT = process.env.PORT;
const server = express();
connect();

const routerUsers = require("./api/routers/users.routes");

server.use( express.json() );
server.use( express.urlencoded( {extended: true} ));
//routes
server.use( "/user", routerUsers);

server.listen(PORT, ()=> console.log(`listening on: http://localhost:${PORT}`) )