const Cockteles = require("../models/cockteles.model");

const getCockteles = async (req, res) => {
    try {
        const allCocteles = await Cockteles.find();
        return res.status(200).json(allCocteles);
    } catch (error) {
        return res.status(500).json(error);
        
    }
};

const createCocktaile = async (req, res) => {
    try {
        const newCocktel = new Cockteles(req.body);
        const createdCocktail = await newCocktel.save();
        return res.status(200).json(createdCocktail)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const modifyCocktaile = async (req, res) => {
    try {
        const {id} = req.params;
        const modifyCocktel = new Cockteles(req.body)
        modifyCocktel._id = id;
        const putCocktel = await Cockteles.findByIdAndUpdate(id, modifyCocktel, {new: true});
        if(!putCocktel){
            return res.status(404).json({"message": "Cocktel not found"})
        }
        return res. status(200).json(putCocktel);
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteCocktaile = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteCocktail = await Cockteles.findByIdAndDelete(id);
        if(!deleteCocktail){
            return res.status(404).json({"message": "Cocktel borrado"})
        }
    } catch (error) {
        return res.status(500).json(error)
        
    }
}

module.exports = { getCockteles, createCocktaile, modifyCocktaile, deleteCocktaile };