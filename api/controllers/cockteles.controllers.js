const Cockteles = require("../models/cockteles.model");

const getCockteles = async (req, res) => {
    try {
        let {page, limit} = req.query;
        const total = await Cockteles.countDocuments();
        limit = limit ? parseInt(limit) : 5;
        let nextPage, prevPage, allCocteles;

        if(page && !isNaN(parseInt(page))){
            page = parseInt(page);
            let numPages = total % limit > 0 ? total / limit + 1 : total / limit;
            if(page> numPages) page = numPages;
            if(page < 1) page = 1;      
            const skip = (page - 1) * limit;
            nextPage = numPages >= page + 1 ? `/?page=${page + 1}&limit=${limit}` : null;
            prevPage = page != 1 ? `/?page=${page - 1}&limit=${limit}` : null;
            allCocteles = await Cockteles.find().skip(skip).limit(limit).populate("receta");
        } else {
            page = 1;
            nextPage = total > limit ? `v/?page=2&limit=${limit}` : null;
            prevPage = null;
            allCocteles = await Cockteles.find().limit(limit).populate("receta");
        }
        return res.status(200).json({
            info: {
                numTotal: total,
                page: page,
                limit: limit,
                nextPage: nextPage,
                prevPage: prevPage
            },
            results: allCocteles,
        }); 
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getCockteles2 = async (req, res) => {
    try {
        const allCocteles = await Cockteles.find().populate("receta");
        return res.status(200).json(allCocteles);
    } catch (error) {
        return res.status(500).json(error);
    }
};
const getCocktelesById = async (req, res) => {
    try {
      const { id } = req.params;
      const allCockteles = await Cockteles.findById(id).populate("receta");
      return res.status(200).json(allCockteles);
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

module.exports = { getCockteles, getCocktelesById, createCocktaile, modifyCocktaile, deleteCocktaile };