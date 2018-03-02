const fishRoutes = require(`express`).Router();
const fishlistController = require(`../controllers/mainController/fishlistController`);
const views = require(`../controllers/viewsController/viewsController`);

fishRoutes.route(`/`)
	.get(fishlistController.index, views.fullListOfSpecies)
fishRoutes.route(`/:species`)
	.get(fishlistController.fishSpecific, fishlistController.fishSpecificLocation, views.viewSingleFish)


module.exports = fishRoutes;