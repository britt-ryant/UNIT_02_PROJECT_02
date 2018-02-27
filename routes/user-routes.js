const userRouter = require(`express`).Router();
const userController = require(`../controllers/main_controller/userController.js`);
const mainController = require(`../controllers/main_controller/mainController.js`);
const fishListController = require(`../controllers/main_controller/fishListController.js`);
const views = require(`../controllers/views_controller/viewsController.js`);


userRouter.route(`/`)
	.get(views.makeUser)
	.post(userController.checkUser, userController.createUser, views.handleNewUser);

userRouter.route(`/myfish/:species`)
	.get(mainController.getListOfLocations, fishListController.fishSpecific, userController.test, views.submitFish)
	.post(userController.isUser)





module.exports = userRouter;