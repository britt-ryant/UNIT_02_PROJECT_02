const weatherRouter = require('express').Router();
const weatherController = require(`../controllers/main_controller/weatherController.js`)
const mainController = require(`../controllers/main_controller/mainController.js`);


weatherRouter.route(`/`)
	.get(mainController.getListOfLocations, weatherController.weatherRequest)




module.exports = weatherRouter;