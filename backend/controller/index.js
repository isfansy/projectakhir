const userControllers = require("./userController");
const AuthenticationController = require("./AuthenticationController");
const prodControl = require("./prodControl");

module.exports = {
  userControllers,
  AuthenticationController,
  prodControl
};

//alurnya controller -> router -> frontend
//controller itu isinya function. sedangkan router isinya API
