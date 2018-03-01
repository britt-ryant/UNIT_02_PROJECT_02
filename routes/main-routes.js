
//Require express router
const mainRouter = require(`express`).Router();
//Link the controller to the router
const mainController = require(`../controllers/main_controller/mainController.js`);
const views = require(`../controllers/views_controller/viewsController.js`)


mainRouter.route(`/`)
	.get(mainController.getListOfLocations, views.index);
mainRouter.route(`/:id`)
	.get(mainController.locationSpecific, views.locationSpecific)
	.post(mainController.isNumber, mainController.createFish, mainController.createLocation, views.handleUpdate)



module.exports = mainRouter