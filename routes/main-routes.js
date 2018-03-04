//Main Router, path /gofish

//Require express router and require all of the controllers needed by this router i.e. mainController and viewsController.

const mainRouter = require(`express`).Router();
const mainController = require(`../controllers/mainController/mainController.js`);
const views = require(`../controllers/viewsController/viewsController.js`)

//main route to display the full list of locations in the database 

mainRouter.route(`/`)
	.get(mainController.getListOfLocations, views.index);

//route to display the information that was presented by the join table in the model, this shows all of the fish that correspond to the specific location that was selected.  This route uses a post method to allow the user to add a fish to the main library, it checks if the input for weight is an integer, creates the fish instance and the location instance, and reloads the page.  

//**********  Would like to add a message that says that the fish was created to a scrollTo method that brings the user to the fish in the list but on a later date  **********

mainRouter.route(`/:id`)
	.get(mainController.locationSpecific, views.locationSpecific)
	.post(mainController.isNumber, mainController.createFish, mainController.createLocation, views.handleUpdate)



module.exports = mainRouter