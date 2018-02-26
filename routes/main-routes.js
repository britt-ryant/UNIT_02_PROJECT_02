
//Require express router
const mainRouter = require(`express`).Router();
//Link the controller to the router
const mainController = require(`../controllers/main_controller/mainController.js`);
const views = require(`../controllers/views_controller/viewsController.js`)


mainRouter.get(`/`, mainController.allSpecies, views.index);

mainRouter.get(`/:location`, mainController.locationSpecific);



module.exports = mainRouter