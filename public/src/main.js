$(() => {
	console.log(`script loaded`)
	$(`button`).click(() => {
		console.log(`am i working now?`)
		$.ajax({
			url: `https://api.darksky.net/forecast/7649f2e71b4e98486f4f945d6053ebe0/37.8267,-122.4233`,
			method: `GET`, 
			success: (data)=> {
				console.log(data)
			}
		})
	})
})


// 39.419390, -72.244713
// https://api.darksky.net/forecast/7649f2e71b4e98486f4f945d6053ebe0/42.3601,-71.0589