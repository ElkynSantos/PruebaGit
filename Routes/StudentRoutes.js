const express = require("express");
const studentRouter = express.Router();

const {newStudent}= require("../Controllers/StudentControllers")


studentRouter.route("/CrearUsuario").post(newStudent);


module.exports = studentRouter