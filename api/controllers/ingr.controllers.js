const Ingrediente = require("../models/ingr.model");

const getIngr = async (req, res) =>{
    try {
    const allIngr = await Ingr.find();
      return res.status(200).json(allIngr); 
    } catch (error) {
      return res.status(500).json(error);
    }
};

const createIngr = async (req, res) => {
    try {
        const newIngr = new Ingrediente(req.body);
        const createdIngr = await newIngr.save();
        return res.status(201).json(createdIngr);
      } catch (error) {
        return res.status(500).json(error);
      }
};

const modifyIngr = async (req, res) => {
    try {
        const {id} = req.params;
        const modifyIngr = new Ingrediente(req.body)
        modifyIngr._id = id;
        const putIngr = await Ingrediente.findByIdAndUpdate(id, modifyIngr, {new: true});
        if(!putCocktel){
            return res.status(404).json({"message": "Ingrediente not found"})
        }
        return res. status(200).json(putIngr);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const deleteIngr = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteIngr = await Ingredientes.findByIdAndDelete(id);
        if(!deleteIngr){
            return res.status(404).json({"message": "Ingrediente borrado"})
        }
    } catch (error) {
        return res.status(500).json(error)
        
    }
}

module.exports = { getIngr, createIngr, modifyIngr, deleteIngr }; 