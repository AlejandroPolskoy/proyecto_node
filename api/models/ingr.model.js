const mongoose = require("mongoose")

const ingrSchema = new mongoose.Schema (
    {
        nomnbre: {type: String, required: true },
        tipo: {type: Number, required: true }, // 0 - solido, 1 - liquido
    }
)

const Ingr = mongoose.model("ingredient", ingrSchema);

module.exports = Ingr;