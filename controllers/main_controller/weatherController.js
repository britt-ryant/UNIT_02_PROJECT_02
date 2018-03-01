const rp = require('request-promise');
const request = require('request');


module.exports = {

 	weatherRequest(req, res, next){
 		rp(`https://api.darksky.net/forecast/7649f2e71b4e98486f4f945d6053ebe0/39.419390, -72.244713?exclude=minutely,daily,hourly,flags`)
 			.then(body => {
 			res.locals.weather = JSON.parse(body)
     		console.log(res.locals.weather);
     		console.log(res.locals.weather.latitude)
 			})
 			.catch(err => {
     			console.log(err);
 			});
 	}
}



