const weatherRouter = require('express').Router();
const weatherController = require(`../controllers/main_controller/weatherController.js`)
const mainController = require(`../controllers/main_controller/mainController.js`);
const views = require(`../controllers/views_controller/viewsController.js`)


weatherRouter.route(`/:id`)
	.get(mainController.getSingleLocation, weatherController.checkWeather, views.showWeather)




module.exports = weatherRouter;