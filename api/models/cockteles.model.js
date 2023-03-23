const mongoose = require("mongoose")

const cockteleSchema = new mongoose.Schema (
    {
        nombre: {type: String, required: true },
        receta: [{ type: Object, required: false }],
        image: {type: String, required: false},
        origen: {type: String, required: true},
        descripcion: {type: String, required: false}
    }
)

const Cockteles = mongoose.model("cocktele", cockteleSchema);

module.exports = Cockteles;