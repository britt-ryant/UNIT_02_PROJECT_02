
//had to call the api from the back end rather than using ajax due to some security issue with the api.  I was using request and request promise initially and then settled on learning axios which worked out much better for me.  I am leaving the rp and request in case I want to revisit them and learn more.

//require axios which is needed to make the request to the api

const rp = require('request-promise');
const request = require('request');
const axios = require(`axios`);


module.exports = {

	//makes a call to the external api by injecting the serial key as well as the latitude and longitude for the given location that was requested and stored in the variable loc.
 	checkWeather(req, res, next) {
 		let loc = res.locals.weatherLocation
 		axios.request({
 			method: `get`,
 			url: `https://api.darksky.net/forecast/${process.env.API_SERIALKEY}/${loc.lat_deg}.${loc.lat_dec},-${loc.lon_deg}.${loc.lon_dec}?exclude=minutely,hourly,daily,alerts,flags`,
 		})
 		.then(result => {
 			res.locals.weather = result.data.currently;
 			next();
 		})

 	},
}




