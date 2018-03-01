const weatherRouter = require('express').Router();
const weatherController = require(`../controllers/main_controller/weatherController.js`)


weatherRouter.get(`/`, weatherController.weatherRequest)




module.exports = weatherRouter;