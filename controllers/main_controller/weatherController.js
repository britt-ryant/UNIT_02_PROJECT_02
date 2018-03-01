const rp = require('request-promise');
const request = require('request');


module.exports = {

 	weatherRequest(req, res, next){
 		console.log(res.locals.location)
 		let newArr = [];
 		res.locals.location.forEach(loc => {
 			// console.log(`https://api.darksky.net/forecast/7649f2e71b4e98486f4f945d6053ebe0/${loc.lat_deg}.${loc.lat_dec},-${loc.lon_deg}.${loc.lon_dec}?exclude=minutely,daily,hourly,flags`)
	 		rp(`https://api.darksky.net/forecast/7649f2e71b4e98486f4f945d6053ebe0/${loc.lat_deg}.${loc.lat_dec},-${loc.lon_deg}.${loc.lon_dec}?exclude=minutely,daily,hourly,flags`)
	 			.then(body => {
	 			res.locals.weather = JSON.parse(body)
	     		console.log(res.locals.weather);
	     		console.log(res.locals.weather.latitude)
	 			})
	 			.catch(err => {
	     			console.log(err);
	 			});
 		})
 	}
}




