const userRouter = require(`express`).Router();
const userController = require(`../controllers/main_controller/userController.js`);
const mainController = require(`../controllers/main_controller/mainController.js`);
const fishListController = require(`../controllers/main_controller/fishListController.js`);
const views = require(`../controllers/views_controller/viewsController.js`);


userRouter.route(`/`)
	.get(views.makeUser)
	.post(userController.checkUser, userController.createUser, views.handleNewUser);

userRouter.route(`/mypage`)
	.get(userController.getUserFish, views.usersPage)

userRouter.route(`/mypage/:id`)
	.get(mainController.getListOfLocations, userController.userEditInfo, views.editFish)
	.put(userController.updateFish, views.handleSubmitFish)
	.delete(userController.destroy, views.handleSubmitFish)

userRouter.route(`/myfish/:species`)
	.get(mainController.getListOfLocations, fishListController.fishSpecific, views.submitFish)
	.post(userController.isUser, userController.createUserFish, views.handleSubmitFish)





module.exports = userRouter;