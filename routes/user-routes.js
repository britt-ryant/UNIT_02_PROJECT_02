//User router, path /user

//Require the express router, and require all of the controllers that this router directs to.  This router utilizes all controllers except the weather controller

const userRouter = require(`express`).Router();
const userController = require(`../controllers/mainController/userController.js`);
const mainController = require(`../controllers/mainController/mainController.js`);
const fishListController = require(`../controllers/mainController/fishlistController.js`);
const views = require(`../controllers/viewsController/viewsController.js`);

//main route for the user router, uses both a get and post. The get method shows the create a new user form.  The post method checks if the username exists in the database, creates the user instance and rendirects to the main index page, displaying new information based on the session that was started. 

userRouter.route(`/`)
	.get(views.makeUser)
	.post(userController.checkUser, userController.createUser, views.handleNewUser);

//login route is similar to the create user route, it checks to see that the user name and the password match and creates a session for that user if the username and password matches what is in the database.

userRouter.route(`/login`)
	.get(views.login)
	.post(userController.logIn, views.handleNewUser);

//logout destroys the session of the user.

userRouter.get(`/logout`, userController.logOut);

///mypage checks to see if the session is not undefined i.e. the user is logged in, checks to see if the user has any information (fish in their list, and directs to either the empty list page or the page that displays all of the information in the database)

//******** Would like to create a function the retrieves all of the information about that fish that are in the users table and give a reccomended location for the user based on lack of fish caught in that particular location.  will address at a later date. ***********

userRouter.route(`/mypage`)
	.get(userController.checkLoggedIn, userController.isListFull, userController.getUserFish, views.usersPage, views.myPageError)

//uses the get method to retrieve all of the information needed for the particular fish that was selected in the users list, and allows the user to either edit the the three unique fields about thier fish, or completely delete the instance

userRouter.route(`/mypage/:id`)
	.get(mainController.getListOfLocations, userController.userEditInfo, views.editFish)
	.put(mainController.isNumber, userController.updateFish, userController.checkLoc, userController.addLocationToFish, views.handleSubmitFish)
	.delete(userController.destroy, userController.isListFull, views.handleSubmitFish)

//this route allows the user to create an instance of a fish for themselves, the get method retrieves all of the information needed to create the instance (all location information) and directs the user to the form.  The post method retrieves all of the information from the create fish form and stors the instance into the table for user fish. 

userRouter.route(`/myfish/:species`)
	.get(mainController.getListOfLocations, fishListController.fishSpecific, views.submitFish)
	.post(userController.checkLoggedIn, mainController.isNumber, userController.createUserFish, userController.checkLoc, userController.addLocationToFish, views.handleSubmitFish)


module.exports = userRouter;