const userRouter = require(`express`).Router();
const userController = require(`../controllers/main_controller/userController.js`);
const views = require(`../controllers/views_controller/viewsController.js`);


userRouter.route(`/`)
	.get(views.makeUser)
	.post(userController.checkUser, userController.createUser, views.handleNewUser)



module.exports = userRouter;