const express = require("express");

const router = express.Router();

const {
    getCockteles,
    createCocktaile,
    modifyCocktaile,
    deleteCocktaile
} = require("../controllers/cockteles.controllers");

router.get("/", getCockteles);
router.post("/new", createCocktaile);
router.put("/:id", modifyCocktaile);
router.delete("/:id", deleteCocktaile);

module.exports = router;