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
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

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

//**** Route to generate random fish information.  Will be set to generate a random fish for now and return the json object for developmental purposes, will modify later ****
app.use(`/gofish`, mainRouter);
app.use(`/fishlist`, fishRouter);
app.use(`/user`, userRouter);
app.use(`/weather`, weatherRouter);

//Landing page
app.get(`/`, (req, res) => {
	res.render(`index`, {
		documentTitle: `Fish app`,
		mainContent: `This is my fishing app, ADD MORE TEXT HERE!!!`
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
