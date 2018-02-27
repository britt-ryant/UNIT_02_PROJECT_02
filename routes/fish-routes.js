const fishRoutes = require(`express`).Router();
const fishlistController = require(`../controllers/main_controller/fishlistController`);
const views = require(`../controllers/views_controller/viewsController`);

fishRoutes.route(`/`)
	.get(fishlistController.index, views.fullListOfSpecies)
fishRoutes.route(`/:species`)
	.get(fishlistController.fishSpecific, fishlistController.fishSpecificLocation, views.viewSingleFish)


module.exports = fishRoutes;