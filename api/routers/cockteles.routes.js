const express = require("express");

const router = express.Router();

const {
    getCockteles,
    getCocktelesById,
    createCocktaile,
    modifyCocktaile,
    deleteCocktaile
} = require("../controllers/cockteles.controllers");

router.get("/:id", getCocktelesById);
router.get("/", getCockteles);
router.post("/", createCocktaile);
router.put("/:id", modifyCocktaile);
router.delete("/:id", deleteCocktaile);

module.exports = router;