//This is the main server.js for my Unit_02 project

//Require packages for the main server.js

const express = require(`express`);
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const mainRouter = (`./routes/main-routes.js`)
//confiure the port 
const PORT = process.env.PORT || 3000;


//Start the app by initalizing express

const app = express();

//Use method override 

app.use(methodOverride(`_method`));

//configure the app
app.use(logger(`dev`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//static configuration

app.use(express.static(`public`));

//view the configuration
app.set(`views`, path.join(__dirname, `views`));
app.set(`view engine`, `ejs`);

app.use(`/`, (req, res) => {
	res.render(`index`, {
		documentTitle: `Fish app`,
		mainContent: `This is my fishing app, ADD MORE TEXT HERE!!!`
	})
})


app.get(`*`, (req, res) => {
	res.status(404).send(`404 : NOT FOUND  💔`)
})


//set a lisener event for the port
app.listen(PORT, () => {
	console.log(`Up and running, listening on port 🙊 ${PORT} in environemnt 🌏 ${process.env.NODE_ENV || 'Development'}`)
})
