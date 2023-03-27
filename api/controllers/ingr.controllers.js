const Ingrediente = require("../models/ingr.model");

const getIngr = async (req, res) =>{
    try {
      const allIngr = await Ingrediente.find();
      return res.status(200).json(allIngr); 
    } catch (error) {
      return res.status(500).json(error);
    }
};

const getIngrById = async (req, res) => {
    try {
      const { id } = req.params;
      const allIngr = await Ingrediente.findById(id);
      return res.status(200).json(allIngr);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

// const getIngrByName = async (req, res) => {
//   try {
//     const { name } = req.params;
//     const ingrName = await Ingrediente.findOne({ nombre: new RegExp("^" + name + "$", "i")});
//     return res.status(200).json(ingrName);
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };

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
        const deleteIngr = await Ingrediente.findByIdAndDelete(id);
        if(!deleteIngr){
            return res.status(404).json({"message": "Ingrediente borrado"})
        }
    } catch (error) {
        return res.status(500).json(error)
        
    }
}

module.exports = { getIngr, getIngrById, createIngr, modifyIngr, deleteIngr }; 