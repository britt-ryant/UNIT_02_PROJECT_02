const userRouter = require(`express`).Router();
const userController = require(`../controllers/mainController/userController.js`);
const mainController = require(`../controllers/mainController/mainController.js`);
const fishListController = require(`../controllers/mainController/fishlistController.js`);
const views = require(`../controllers/viewsController/viewsController.js`);


userRouter.route(`/`)
	.get(views.makeUser)
	.post(userController.checkUser, userController.createUser, views.handleNewUser);

userRouter.route(`/mypage`)
	.get(userController.checkLoggedIn, userController.isListFull, userController.getUserFish, views.usersPage, views.myPageError)

userRouter.route(`/mypage/:id`)
	.get(mainController.getListOfLocations, userController.userEditInfo, views.editFish)
	.put(mainController.isNumber, userController.updateFish, userController.checkLoc, userController.addLocationToFish, views.handleSubmitFish)
	.delete(userController.destroy, userController.isListFull, views.handleSubmitFish)

userRouter.route(`/myfish/:species`)
	.get(mainController.getListOfLocations, fishListController.fishSpecific, views.submitFish)
	.post(userController.checkLoggedIn, mainController.isNumber, userController.createUserFish, userController.checkLoc, userController.addLocationToFish, views.handleSubmitFish)


module.exports = userRouter;