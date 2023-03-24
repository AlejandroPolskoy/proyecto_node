const express = require("express");

const router = express.Router();

const {
    getIngr,
    getIngrById,
    // getIngrByName,
    createIngr,
    modifyIngr,
    deleteIngr,
} = require("../controllers/ingr.controllers");

router.get("/:id", getIngrById);
// router.get("/:name", getIngrByName);
router.get("/", getIngr);
router.post("/", createIngr);
router.put("/:id", modifyIngr);
router.delete("/:id", deleteIngr);

module.exports = router;