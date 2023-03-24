const express = require("express");
const dotenv = require("dotenv").config();
const cors = require('cors');
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

server.use((req, res , next) => {
    res.header('Access-Control-Allow-Method', 'POST, GET, DELETE, PUT, PATCH');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); 
    next();
})

server.use( express.json() );
server.use( express.urlencoded( {extended: true} ));
//routes
server.use( "/user", routerUsers );
server.use( "/cocteles", routerCocktailes );
server.use( "/ingr", routerIngr );
server.get( "/", (req, res) => {
    //res.sendFile(`${__dirname}/index.html`);
})

server.use(cors({
    origin: ["http://localhost:5500", "http://localhost:4200", "http://nombre.vercel.com", "http://127.0.0.1:5500"],
    credentials: true
}))

server.listen(PORT, ()=> console.log(`listening on: http://localhost:${PORT}`))



// NO ME CONECTA =(