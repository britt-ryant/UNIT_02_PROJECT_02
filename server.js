//This is the main server.js for my Unit_02 project

//Require packages for the main server.js
require(`dotenv`).config();
const express = require(`express`);
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const mainRouter = require(`./routes/main-routes.js`);
const fishRouter = require(`./routes/fish-routes.js`);
const userRouter = require(`./routes/user-routes.js`);
const weatherRouter = require(`./routes/weather-router.js`)
const session = require(`express-session`);

//confiure the port 
const PORT = process.env.PORT || 3000;

//Start the app by initalizing express

const app = express();

//Use method override 

app.use(methodOverride(`_method`));

//configure the app

app.use(logger(`dev`));

//use body parser, .json for inital build of routes, the urlencoded for app useage

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//use session

app.use(session({
	resave: false, 
	saveUninitialized: false,
	secret:"shhhh secret",
}))

//static configuration

app.use(express.static(`public`));

//view the configuration

app.set(`views`, path.join(__dirname, `views`));
app.set(`view engine`, `ejs`);

//function to set an error message using the session.  as of now, do not need the msg constant for the message but leaving it in the code for furhter dvlpmnt if I find a use case for a message.

app.use(function(req, res, next) {
	const err = req.session.error;
	const msg = req.session.success;
	delete req.session.error;
	delete req.session.success;
	res.locals.message = ' ';
	if(err) res.locals.message = `<p class="msg error">${err}</p>`;
	if(msg) res.locals.message = `<p class="msg success">${msg}</p>`;
	next();
})

//function to store the user session data into res.locals for use on the views page(display the welcome message, the user profile button, the name of the user in the users personal page)

app.use(function(req, res, next) {
	res.locals.user = req.session.user;
	next();
})

//main routes that get redirected to the different routers.  

app.use(`/gofish`, mainRouter);
app.use(`/fishlist`, fishRouter);
app.use(`/user`, userRouter);
app.use(`/weather`, weatherRouter);

//Landing page with the information that gets passed to the view for the index page

app.get(`/`, (req, res) => {
	// console.log(req.session.user, res.locals.user)
	res.render(`index`, {
		documentTitle: `Catch Tracker`,
		mainContent: `Find fish anywhere in the world`,
		subContent: `Keep track of your catches by creating a profile or logging in`,
		data: res.locals.user
	})
});

//catch all page to set status to a 404

app.use(`*`, (req, res) => {
	res.status(404).send(`<h1 id="error">404 : NOT FOUND  💔</h1>`)
});


//set a lisener event for the port

app.listen(PORT, () => {
	console.log(`Up and running, listening on port 🙊 ${PORT} in environemnt 🌏 ${process.env.NODE_ENV || 'Development'}`)
})
