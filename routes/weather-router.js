const weatherRouter = require('express').Router();
const weatherController = require(`../controllers/mainController/weatherController.js`)
const mainController = require(`../controllers/mainController/mainController.js`);
const views = require(`../controllers/viewsController/viewsController.js`)


weatherRouter.route(`/:id`)
	.get(mainController.getSingleLocation, weatherController.checkWeather, views.showWeather)




module.exports = weatherRouter;