const Cockteles = require("../models/cockteles.model");

function getCockteles(req, res) {
    console.log("Esto es getCockteles");
}

function createCocktaile(req, res) {
    console.log("Esto es create cocktaile");
}

function modifyCocktaile(req, res) {
    console.log("Esto es modify cocktaile");
}

function deleteCocktaile(req, res) {
    console.log("Esto es delete cocktaile");
}

module.exports = { getCockteles, createCocktaile, modifyCocktaile, deleteCocktaile };