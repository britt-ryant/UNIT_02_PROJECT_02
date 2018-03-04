//weather Router, path /weather 

//require express router and require all of the controllers that this router directs to

const weatherRouter = require('express').Router();
const weatherController = require(`../controllers/mainController/weatherController.js`);
const mainController = require(`../controllers/mainController/mainController.js`);
const views = require(`../controllers/viewsController/viewsController.js`);

//gets all of the information about the location that is needed for the call to the API for the weather information

weatherRouter.route(`/:id`)
	.get(mainController.getSingleLocation, weatherController.checkWeather, views.showWeather)




module.exports = weatherRouter;