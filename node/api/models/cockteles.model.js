const mongoose = require("mongoose")

const cockteleSchema = new mongoose.Schema (
    {
        nomnbre: {type: String, required: true },
        receta: [{ type: Object, required: false }],
        image: {type: String, required: false},
        origen: {type: String, required: true},
        descripcion: {type: String, required: false}
    }
)

const Cocktele = mongoose.model("cocktele", cockteleSchema);

module.exports = Cocktele;