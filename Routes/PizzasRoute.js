const express = require("express");
const Pizza_Routes = express.Router();
const {
    newPizza,
    getPizza,
    updatePizza,
    DeletePizza
} = require("../Controllers/PizzasController");

Pizza_Routes.route("/createPizza").post(newPizza);
Pizza_Routes.route("/readPizza").get(getPizza);
Pizza_Routes.route("/updatePizza").post(updatePizza);
Pizza_Routes.route("/deletePizza/:sku").get(DeletePizza);

module.exports = Pizza_Routes;