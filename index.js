const express = require("express");
const dotenv = require("dotenv").config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})
const {connect} = require("./api/utils/database");

const PORT = process.env.PORT;
const server = express();
connect();

const routerUsers = require("./api/routers/users.routes");
const routerCocktailes = require("./api/routers/cockteles.routes");
const routerIngr = require("./api/routers/ingr.routes");

server.use( express.json() );
server.use( express.urlencoded( {extended: true} ));
//routes
server.use( "/user", routerUsers );
server.use( "/cocktaile", routerCocktailes );
server.use( "/ingr", routerIngr );
server.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
})

server.listen(PORT, ()=> console.log(`listening on: http://localhost:${PORT}`))