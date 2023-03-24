const mongoose = require("mongoose")

const Schema = mongoose.Schema

const cockteleSchema = new Schema (
    {
        nombre: {type: String, required: true },
        receta: [{type: Schema.Types.ObjectId, ref: "ingredient"}],
        image: {type: String, required: false},
        origen: {type: String, required: true},
        descripcion: {type: String, required: false},
        instrucciones: {type: String, requires: false}
    }
)

const Cocteles = mongoose.model("cocktele", cockteleSchema);

module.exports = Cocteles;