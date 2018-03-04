//Fish Router, path /fishlist

//require the router and require the path for the controllers needed by this router i.e. fishlistController and viewsController.

const fishRoutes = require(`express`).Router();
const fishlistController = require(`../controllers/mainController/fishlistController`);
const views = require(`../controllers/viewsController/viewsController`);

//main route to display all of the fish in the database (full library)

fishRoutes.route(`/`)
	.get(fishlistController.index, views.fullListOfSpecies)

//route to show the one particular fish that the user has selected

fishRoutes.route(`/:species`)
	.get(fishlistController.fishSpecific, fishlistController.fishSpecificLocation, views.viewSingleFish)


module.exports = fishRoutes;