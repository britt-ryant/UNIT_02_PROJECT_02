const rp = require('request-promise');
const request = require('request');
const axios = require(`axios`);


module.exports = {

 	checkWeather(req, res, next) {
 		let loc = res.locals.weatherLocation
 		axios.request({
 			method: `get`,
 			url: `https://api.darksky.net/forecast/7649f2e71b4e98486f4f945d6053ebe0/${loc.lat_deg}.${loc.lat_dec},-${loc.lon_deg}.${loc.lon_dec}?exclude=minutely,hourly,daily,alerts,flags`,
 		})
 		.then(result => {
 			res.locals.weather = result.data.currently;
 			next()
 		})

 	},
}




