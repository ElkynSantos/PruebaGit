const { Router } = require("express")
const StudentController = require("../Controllers/StudentControllers")
const studentRouter = Router();

studentRouter.route("/CrearUsuario").post(StudentController)


module.exports = studentRouter