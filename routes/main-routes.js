
//Require express router
const mainRouter = require(`express`).Router();
//Link the controller to the router
const mainController = require(`../controllers/main_controller/mainController.js`)


mainRouter.get(`/`, mainController.getOneFish)



module.exports = mainRouter